package com.svendsenphotography.backend.controller;

import com.svendsenphotography.backend.service.OpenAiService;
import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.Refill;
import io.github.bucket4j.local.LocalBucketBuilder;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class OpenAiController {

    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();
    private static final long REQUEST_LIMIT = 20;
    private static final long REFILL_DAYS = 7;

    private final OpenAiService openAiService;

    public OpenAiController(OpenAiService openAiService) {
        this.openAiService = openAiService;
    }

    @PostMapping("/generate-recipes")
    public ResponseEntity<?> generateRecipes(HttpServletRequest request,
                                             @RequestBody Map<String, Object> body) {
        String userIp = request.getRemoteAddr();
        Bucket bucket = buckets.computeIfAbsent(userIp, this::createNewBucket);
        if (!bucket.tryConsume(1)) {
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                    .body(Map.of("error", "För många förfrågningar. Försök igen senare!"));
        }

        List<String> allergens = (List<String>) body.getOrDefault("allergens", new ArrayList<>());
        List<String> ingredients = (List<String>) body.getOrDefault("ingredients", new ArrayList<>());
        int servings = (int) body.getOrDefault("servings", 2);
        String cuisine = (String) body.getOrDefault("cuisine", "");

        String allergenList = allergens.isEmpty() ? "inga" : String.join(", ", allergens);
        String ingredientList = ingredients.isEmpty() ? "inga" : String.join(", ", ingredients);
        String cuisineText = cuisine.isEmpty() ? "" : String.format(", anpassade efter %s matkultur", cuisine);

        String prompt = String.format(
                "Generera 3 olika recept för %d personer%s. Varje recept ska ha följande format:\n" +
                        "1. Ingredienser: en tydlig lista över alla nödvändiga ingredienser, där de valda ingredienserna (%s) prioriteras och bör ingå om de passar receptet, men inte nödvändigtvis måste användas i sin helhet.\n" +
                        "2. Tillvägagångssätt: en steg-för-steg instruktion för hur man tillagar rätten.\n" +
                        "Jag är allergisk mot %s och har följande ingredienser som riktlinje: %s. Dessa ingredienser bör beaktas med hög prioritet, men det är tillåtet att inkludera andra lämpliga ingredienser vid behov.",
                servings, cuisineText, ingredientList, allergenList, ingredientList
        );

        return openAiService.callOpenAiApi(prompt);
    }

    private Bucket createNewBucket(String ip) {
        Bandwidth limit = Bandwidth.classic(
                REQUEST_LIMIT,
                Refill.greedy(REQUEST_LIMIT, Duration.ofDays(REFILL_DAYS))
        );
        return new LocalBucketBuilder().addLimit(limit).build();
    }
}
