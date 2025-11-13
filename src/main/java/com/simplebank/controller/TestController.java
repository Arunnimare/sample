package com.simplebank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.simplebank.repository.UserRepository;
import com.simplebank.model.User;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/test")
public class TestController {
    private static final Logger logger = LoggerFactory.getLogger(TestController.class);

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/db-test")
    public ResponseEntity<?> testDatabaseConnection() {
        try {
            // Test database read operation
            List<User> users = userRepository.findAll();
            logger.info("Successfully retrieved {} users from database", users.size());
            
            // Test database write operation
            User testUser = new User();
            testUser.setUsername("testuser_" + System.currentTimeMillis());
            testUser.setEmail("test_" + System.currentTimeMillis() + "@example.com");
            testUser.setPassword("test_password");
            User savedUser = userRepository.save(testUser);
            logger.info("Successfully created test user with ID: {}", savedUser.getId());

            // Clean up test data
            userRepository.delete(savedUser);
            logger.info("Successfully deleted test user");

            return ResponseEntity.ok()
                .body(String.format("Database connection test successful. Users found: %d", users.size()));
        } catch (Exception e) {
            logger.error("Database connection test failed", e);
            return ResponseEntity.internalServerError()
                .body("Database connection test failed: " + e.getMessage());
        }
    }
}