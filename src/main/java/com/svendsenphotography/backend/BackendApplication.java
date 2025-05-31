package com.svendsenphotography.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.env.ConfigurableEnvironment;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(BackendApplication.class, args);
        ConfigurableEnvironment env = context.getEnvironment();
        System.out.println("=== Aktiv profil: " + String.join(", ", env.getActiveProfiles()) + " ===");
    }
}
