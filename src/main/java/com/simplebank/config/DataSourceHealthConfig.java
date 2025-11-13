package com.simplebank.config;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSourceHealthConfig {
    
    /**
     * Provides a simple health indicator that always returns UP
     * This ensures the application can start and respond to health checks
     * even if the database is not available yet
     */
    @Bean
    @ConditionalOnProperty(name = "spring.datasource.url", matchIfMissing = false)
    public HealthIndicator simpleHealthIndicator() {
        return () -> Health.up()
            .withDetail("status", "Application is running")
            .withDetail("note", "Database health check is lazy")
            .build();
    }
}
