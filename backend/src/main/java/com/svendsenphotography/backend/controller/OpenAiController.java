package com.svendsenphotography.backend.controller;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.Refill;
import io.github.bucket4j.local.LocalBucketBuilder;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class OpenAiController {

    // Per-IP bucket-lagring för rate-limiting
    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();

    // Hämta nyckeln från ex. application.properties eller miljövariabel
    @Value("${openai.api.key:}")
    private String openAiApiKey;

    // OpenAI-slutpunkt
    private static final String OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

    // Rate-limiting: max 20 anrop per 7 dagar
    private static final long REQUEST_LIMIT = 20;
    private static final long REFILL_DAYS = 7;

    @PostMapping("/generate-recipes")
    public ResponseEntity<?> generateRecipes(HttpServletRequest request,
                                             @RequestBody Map<String, Object> body) {

        // 1. Kolla rate limit
        String userIp = request.getRemoteAddr();
        Bucket bucket = buckets.computeIfAbsent(userIp, this::createNewBucket);

        if (!bucket.tryConsume(1)) {
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                    .body(Map.of("error", "För många förfrågningar. Försök igen senare!"));
        }

        // 2. Läs in data från frontend: allergens, ingredients, servings och cuisine (valfritt)
        List<String> allergens = (List<String>) body.getOrDefault("allergens", new ArrayList<>());
        List<String> ingredients = (List<String>) body.getOrDefault("ingredients", new ArrayList<>());
        int servings = (int) body.getOrDefault("servings", 2);
        String cuisine = (String) body.getOrDefault("cuisine", "");

        // 3. Bygg upp prompten med ett standardiserat format
        String allergenList = allergens.isEmpty() ? "inga" : String.join(", ", allergens);
        String ingredientList = ingredients.isEmpty() ? "inga" : String.join(", ", ingredients);
        String cuisineText = cuisine.isEmpty() ? "" : String.format(", anpassade efter %s matkultur", cuisine);

        String prompt = String.format(
                "Generera 3 olika recept för %d personer%s. Varje recept ska ha följande format:\n" +
                        "1. Ingredienser: en tydlig lista över alla nödvändiga ingredienser.\n" +
                        "2. Tillvägagångssätt: en steg-för-steg instruktion för hur man tillagar rätten.\n" +
                        "Jag är allergisk mot %s och har följande ingredienser som en riktlinje: %s. Du kan använda dessa ingredienser som vägledning, men det är tillåtet att inkludera andra lämpliga ingredienser vid behov.",
                servings, cuisineText, allergenList, ingredientList
        );

        // 4. Anropa OpenAI med prompten
        return callOpenAiApi(prompt);
    }

    private Bucket createNewBucket(String ip) {
        Bandwidth limit = Bandwidth.classic(
                REQUEST_LIMIT,
                Refill.greedy(REQUEST_LIMIT, Duration.ofDays(REFILL_DAYS))
        );
        return new LocalBucketBuilder().addLimit(limit).build();
    }

    private ResponseEntity<?> callOpenAiApi(String prompt) {
        // Säkerställ att vi har en API-nyckel
        if (openAiApiKey == null || openAiApiKey.isBlank()) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "OpenAI-nyckel saknas i servern"));
        }

        // Bygg payload för OpenAI
        Map<String, Object> payload = new HashMap<>();
        payload.put("model", "gpt-3.5-turbo");
        payload.put("temperature", 0.7);

        List<Map<String, String>> messages = new ArrayList<>();
        messages.add(Map.of("role", "user", "content", prompt));
        payload.put("messages", messages);

        // Skicka request till OpenAI
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(openAiApiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(payload, headers);

        try {
            ResponseEntity<Map> response = restTemplate.postForEntity(OPENAI_API_URL, entity, Map.class);

            if (response.getBody() == null) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(Map.of("error", "OpenAI gav inget svar"));
            }

            Map<String, Object> responseBody = response.getBody();
            List<Map<String, Object>> choices = (List<Map<String, Object>>) responseBody.get("choices");
            if (choices == null || choices.isEmpty()) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(Map.of("error", "Inga choices från OpenAI"));
            }

            Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
            String content = (String) message.get("content");

            return ResponseEntity.ok(Map.of("recipes", content.split("\n")));

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Fel vid OpenAI-anrop", "details", e.getMessage()));
        }
    }
}
