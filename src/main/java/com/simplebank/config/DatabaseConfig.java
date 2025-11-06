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

    @Value("${spring.datasource.url}")
    private String url;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    @Bean
    public DataSource dataSource() {
        try {
            // Explicitly load the PostgreSQL driver
            Class.forName("org.postgresql.Driver");
            logger.info("PostgreSQL JDBC Driver loaded successfully");

            // Create the datasource
            DriverManagerDataSource dataSource = new DriverManagerDataSource();
            dataSource.setDriverClassName("org.postgresql.Driver");
            dataSource.setUrl(url);
            dataSource.setUsername(username);
            dataSource.setPassword(password);

            logger.info("Initializing DataSource with URL: {}", url);

            // Test the connection
            try {
                logger.info("Testing database connection...");
                try (Connection conn = dataSource.getConnection()) {
                    logger.info("Successfully connected to the database");
                }
            } catch (Exception e) {
                logger.error("Failed to connect to the database", e);
                throw new RuntimeException("Failed to connect to the database", e);
            }

            return dataSource;

        } catch (Exception e) {
            logger.error("Failed to create datasource", e);
            throw new RuntimeException("Failed to create datasource", e);
        }
    }
}