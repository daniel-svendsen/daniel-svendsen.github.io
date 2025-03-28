package com.svendsenphotography.backend.dto;

import java.util.List;

public class ReceptoBotDTO {

    private List<String> allergens;
    private List<String> ingredients;
    private List<String> proteins;
    private int servings;
    private String cuisine;

    // Default constructor
    public ReceptoBotDTO() {
    }

    // Parameterized constructor
    public ReceptoBotDTO(List<String> allergens, List<String> ingredients, List<String> proteins, int servings, String cuisine) {
        this.allergens = allergens;
        this.ingredients = ingredients;
        this.proteins = proteins;
        this.servings = servings;
        this.cuisine = cuisine;
    }

    public List<String> getAllergens() {
        return allergens;
    }

    public void setAllergens(List<String> allergens) {
        this.allergens = allergens;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    public List<String> getProteins() {
        return proteins;
    }

    public void setProteins(List<String> proteins) {
        this.proteins = proteins;
    }

    public int getServings() {
        return servings;
    }

    public void setServings(int servings) {
        this.servings = servings;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }
}
