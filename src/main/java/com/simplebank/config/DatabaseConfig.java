package com.simplebank.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import javax.sql.DataSource;
import java.sql.Connection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Configuration
public class DatabaseConfig {
    private static final Logger logger = LoggerFactory.getLogger(DatabaseConfig.class);

    @Value("${SPRING_DATASOURCE_URL:${spring.datasource.url:${DATABASE_URL:jdbc:postgresql://localhost:5432/simplebank}}}")
    private String url;

    @Value("${SPRING_DATASOURCE_USERNAME:${spring.datasource.username:postgres}}")
    private String username;

    @Value("${SPRING_DATASOURCE_PASSWORD:${spring.datasource.password:password}}")
    private String password;

    @Bean
    public DataSource dataSource() {
        try {
            logger.info("Initializing HikariCP DataSource with URL: {}", url);
            
            HikariConfig config = new HikariConfig();
            config.setJdbcUrl(url);
            config.setUsername(username);
            config.setPassword(password);
            config.setDriverClassName("org.postgresql.Driver");
            
            // Connection pool settings
            config.setMaximumPoolSize(3);
            config.setMinimumIdle(1);
            config.setConnectionTimeout(20000);
            config.setIdleTimeout(300000);
            config.setInitializationFailTimeout(0);
            
            // Connection test query
            config.setConnectionTestQuery("SELECT 1");
            
            // Add connection init SQL to verify connection
            config.setConnectionInitSql("SELECT 1");
            
            HikariDataSource dataSource = new HikariDataSource(config);
            
            // Test the connection
            try {
                logger.info("Testing database connection...");
                try (Connection conn = dataSource.getConnection()) {
                    logger.info("Successfully connected to the database");
                }
            } catch (Exception e) {
                logger.error("Failed to connect to the database. URL: {}, Username: {}", url, username);
                throw new RuntimeException("Failed to connect to the database", e);
            }
            
            return dataSource;
        } catch (Exception e) {
            logger.error("Failed to create datasource. URL: {}, Username: {}", url, username);
            throw new RuntimeException("Failed to create datasource", e);
        }
    }
}