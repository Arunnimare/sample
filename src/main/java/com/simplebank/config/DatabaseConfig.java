package com.simplebank.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import javax.sql.DataSource;
import java.sql.Connection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Configuration
public class DatabaseConfig {
    private static final Logger logger = LoggerFactory.getLogger(DatabaseConfig.class);

    @Value("${SPRING_DATASOURCE_URL:}")
    private String url;

    @Value("${SPRING_DATASOURCE_USERNAME:}")
    private String username;

    @Value("${SPRING_DATASOURCE_PASSWORD:}")
    private String password;

    @Bean
    public DataSource dataSource() {
        try {
            // Explicitly load the PostgreSQL driver
            Class.forName("org.postgresql.Driver");
            logger.info("PostgreSQL JDBC Driver loaded successfully");
        } catch (ClassNotFoundException e) {
            logger.error("PostgreSQL JDBC Driver not found", e);
            throw new RuntimeException("PostgreSQL JDBC Driver not found", e);
        }

        // Try different environment variable names
        String databaseUrl = System.getenv("DATABASE_URL");
        if (databaseUrl == null || databaseUrl.trim().isEmpty()) {
            databaseUrl = System.getenv("POSTGRES_URL");
        }
        if (databaseUrl == null || databaseUrl.trim().isEmpty()) {
            logger.error("No database URL environment variable found");
            throw new RuntimeException("Either DATABASE_URL or POSTGRES_URL environment variable is required");
        }

        logger.info("Database URL before processing: {}", databaseUrl);

        try {
            if (databaseUrl.startsWith("postgres://")) {
                // Convert Render postgres:// URL to jdbc:postgresql:// URL
                databaseUrl = databaseUrl.replace("postgres://", "");
                String[] parts = databaseUrl.split("@");
                if (parts.length == 2) {
                    String[] credentials = parts[0].split(":");
                    if (credentials.length == 2) {
                        username = credentials[0];
                        password = credentials[1];
                    }
                    databaseUrl = "jdbc:postgresql://" + parts[1];
                }
            }

            logger.info("Initializing DataSource with processed URL: {}", databaseUrl);

            DriverManagerDataSource dataSource = new DriverManagerDataSource();
            dataSource.setDriverClassName("org.postgresql.Driver");
            dataSource.setUrl(databaseUrl);
            dataSource.setUsername(username);
            dataSource.setPassword(password);

            // Test the connection
            try (Connection conn = dataSource.getConnection()) {
                logger.info("Successfully established test connection to the database");
            }

            return dataSource;
        } catch (Exception e) {
            logger.error("Failed to create datasource", e);
            throw new RuntimeException("Failed to create datasource", e);
        }
    }
}