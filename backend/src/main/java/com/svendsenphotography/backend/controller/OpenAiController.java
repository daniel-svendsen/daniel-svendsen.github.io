//package com.svendsenphotography.backend.controller;
//
//import com.svendsenphotography.backend.dto.ReceptoBotDTO;
//import com.svendsenphotography.backend.service.OpenAiService;
//import io.github.bucket4j.Bandwidth;
//import io.github.bucket4j.Bucket;
//import io.github.bucket4j.Refill;
//import io.github.bucket4j.local.LocalBucketBuilder;
//import jakarta.servlet.http.HttpServletRequest;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.time.Duration;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Map;
//import java.util.concurrent.ConcurrentHashMap;
//
//@RestController
//@RequestMapping("/api")
//@CrossOrigin(origins = "*")
//public class OpenAiController {
//
//    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();
//    private static final long REQUEST_LIMIT = 100;
//    private static final long REFILL_DAYS = 7;
//
//    private final OpenAiService openAiService;
//
//    public OpenAiController(OpenAiService openAiService) {
//        this.openAiService = openAiService;
//    }
//
//    @PostMapping("/generate-recipes")
//    public ResponseEntity<?> generateRecipes(HttpServletRequest request,
//                                             @RequestBody ReceptoBotDTO receptoBotDTO) {
//        String userIp = request.getRemoteAddr();
//        Bucket bucket = buckets.computeIfAbsent(userIp, this::createNewBucket);
//        if (!bucket.tryConsume(1)) {
//            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
//                    .body(Map.of("error", "För många förfrågningar. Försök igen senare!"));
//        }
//
//        // Mappa DTO-fälten med fallbacks
//        List<String> allergens = receptoBotDTO.getAllergens() != null ? receptoBotDTO.getAllergens() : new ArrayList<>();
//        List<String> ingredients = receptoBotDTO.getIngredients() != null ? receptoBotDTO.getIngredients() : new ArrayList<>();
//        int servings = receptoBotDTO.getServings();
//        String cuisine = receptoBotDTO.getCuisine() != null ? receptoBotDTO.getCuisine() : "";
//
//        String allergenList = allergens.isEmpty() ? "inga" : String.join(", ", allergens);
//        String ingredientList = ingredients.isEmpty() ? "inga" : String.join(", ", ingredients);
//        String cuisineText = cuisine.isEmpty() ? "" : String.format(", anpassade efter %s matkultur", cuisine);
//        List<String> proteins = receptoBotDTO.getProteins() != null ? receptoBotDTO.getProteins() : new ArrayList<>();
//
//        String proteinPromptPart = "";
//        if (!proteins.isEmpty()) {
//            proteinPromptPart = "använd endast " + String.join(", ", proteins) + " som huvudingrediens";
//        }
//
//        String prompt = String.format(
//                "Generera 3 olika recept där huvudingrediensen är ENDAST %s för %d personer%s. " +
//                        "Varje recept ska ha följande format:\n" +
//                        "1. 'id': ett unikt identifieringsnummer eller sträng.\n" +
//                        "2. 'title': en kort titel för receptet.\n" +
//                        "3. 'content': ett objekt med exakt följande fält:\n" +
//                        "   a. 'ingredients': en array med ingredienser där varje ingrediens anges med namn och mängd anpassad för %d personer.\n" +
//                        "   b. 'instructions': en steg-för-steg instruktion.\n" +
//                        "Inkludera endast recept där de valda ingredienserna (%s) beaktas och där %s används som huvudingrediens. " +
//                        "Jag är allergisk mot %s. " +
//                        "Returnera enbart svaret som en JSON med fältet \"recipes\" som en array av objekt, utan några ytterligare kommentarer. " +
//                        "Svara alltid på svenska.",
//                proteinPromptPart,
//                servings,
//                cuisineText,
//                servings,
//                ingredientList,
//                proteinPromptPart,
//                allergenList
//        );
//        System.out.println("ReceptoBotDTO proteiner: " + receptoBotDTO.getProteins());
//        return openAiService.callOpenAiApi(prompt);
//    }
//
//    private Bucket createNewBucket(String ip) {
//        Bandwidth limit = Bandwidth.classic(
//                REQUEST_LIMIT,
//                Refill.greedy(REQUEST_LIMIT, Duration.ofDays(REFILL_DAYS))
//        );
//        return new LocalBucketBuilder().addLimit(limit).build();
//    }
//}
