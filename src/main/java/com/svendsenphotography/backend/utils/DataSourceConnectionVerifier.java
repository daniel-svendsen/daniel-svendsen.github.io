package com.svendsenphotography.backend.utils;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;

@Component
public class DataSourceConnectionVerifier {
    private final DataSource dataSource;

    public DataSourceConnectionVerifier(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @PostConstruct
    public void verifyConnection() {
        try (Connection connection = dataSource.getConnection()) {
            // Check connection status
            System.out.println("Connection is open: " + !connection.isClosed());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
