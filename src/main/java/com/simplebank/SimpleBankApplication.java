package com.simplebank;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.boot.web.context.WebServerInitializedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class SimpleBankApplication {
    private static final Logger logger = LoggerFactory.getLogger(SimpleBankApplication.class);

    public static void main(String[] args) {
        logger.info("Starting Simple Bank Application...");
        logger.info("Environment Variables:");
        logger.info("PORT={}", System.getenv("PORT"));
        logger.info("SPRING_PROFILES_ACTIVE={}", System.getenv("SPRING_PROFILES_ACTIVE"));
        
        SpringApplication app = new SpringApplication(SimpleBankApplication.class);
        app.run(args);
    }
}

@Component
class StartupLogger {
    private static final Logger logger = LoggerFactory.getLogger(StartupLogger.class);
    private final Environment environment;

    StartupLogger(Environment environment) {
        this.environment = environment;
    }

    @EventListener
    public void onApplicationStarted(ApplicationStartedEvent event) {
        String port = environment.getProperty("server.port");
        String address = environment.getProperty("server.address");
        logger.info("Application started on {}:{}", address, port);
    }

    @EventListener
    public void onWebServerInitialized(WebServerInitializedEvent event) {
        int port = event.getWebServer().getPort();
        logger.info("Web server initialized and listening on port {}", port);
        logger.info("Server info: {}", event.getWebServer().getClass().getName());
    }
}