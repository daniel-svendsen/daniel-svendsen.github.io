//package com.svendsenphotography.backend.service;
//
//import com.fasterxml.jackson.core.type.TypeReference;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.*;
//import org.springframework.stereotype.Service;
//import org.springframework.web.client.RestTemplate;
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@Service
//public class OpenAiService {
//
//    @Value("${OPENAI_API_KEY:}")
//    private String openAiApiKey;
//
//    private static final String OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
//
//    public ResponseEntity<?> callOpenAiApi(String prompt) {
//        if (openAiApiKey == null || openAiApiKey.isBlank()) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("error", "OpenAI-nyckel saknas i servern"));
//        }
//
//        // Bygg upp payload för OpenAI-anropet
//        Map<String, Object> payload = new HashMap<>();
//        payload.put("model", "gpt-3.5-turbo");
//        payload.put("temperature", 0.7);
//
//        List<Map<String, String>> messages = new ArrayList<>();
//        messages.add(Map.of("role", "user", "content", prompt));
//        payload.put("messages", messages);
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setBearerAuth(openAiApiKey);
//        headers.setContentType(MediaType.APPLICATION_JSON);
//
//        RestTemplate restTemplate = new RestTemplate();
//        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(payload, headers);
//
//        try {
//            ResponseEntity<Map> response = restTemplate.postForEntity(OPENAI_API_URL, entity, Map.class);
//            if (response.getBody() == null) {
//                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                        .body(Map.of("error", "OpenAI gav inget svar"));
//            }
//
//            List<Map<String, Object>> choices = (List<Map<String, Object>>) response.getBody().get("choices");
//            if (choices == null || choices.isEmpty()) {
//                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                        .body(Map.of("error", "Inga choices från OpenAI"));
//            }
//
//            Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
//            String content = (String) message.get("content");
//
//            // Försök att parsa GPT-svaret som JSON
//            // Försök att parsa GPT-svaret som JSON med fallback
//            ObjectMapper mapper = new ObjectMapper();
//            try {
//                // First attempt: parse the full content
//                Map<String, Object> result = mapper.readValue(content, new TypeReference<Map<String, Object>>() {
//                });
//                return ResponseEntity.ok(result);
//            } catch (Exception e) {
//                // Fallback: extract the JSON substring from content
//                int start = content.indexOf('{');
//                int end = content.lastIndexOf('}');
//                if (start != -1 && end != -1 && start < end) {
//                    String jsonPart = content.substring(start, end + 1);
//                    try {
//                        Map<String, Object> result = mapper.readValue(jsonPart, new TypeReference<Map<String, Object>>() {
//                        });
//                        result.put("debugPrompt", prompt);
//                        // Om du vill logga i serverns konsol:
//                        if (result.get("debugPrompt") != null) {
//                            System.out.println("Prompt som skickades: " + result.get("debugPrompt"));
//                        }
//                        return ResponseEntity.ok(result);
//                    } catch (Exception ex) {
//                        ex.printStackTrace();
//                    }
//                }
//                e.printStackTrace();
//                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                        .body(Map.of("error", "Fel vid tolkning av GPT-svar", "details", e.getMessage()));
//            }
//
//
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("error", "Fel vid OpenAI-anrop", "details", e.getMessage()));
//        }
//    }
//}
