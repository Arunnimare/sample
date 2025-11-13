package com.simplebank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.simplebank.repository.UserRepository;
import com.simplebank.repository.AccountRepository;
import com.simplebank.model.User;
import com.simplebank.model.Account;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/debug")
public class TestDataController {
    private static final Logger logger = LoggerFactory.getLogger(TestDataController.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/create-test-data")
    public ResponseEntity<?> createTestData() {
        try {
            // Create test user
            User user = new User();
            user.setUsername("testuser");
            user.setPassword("testpass");
            user.setEmail("test@example.com");
            user.setFullName("Test User");
            User savedUser = userRepository.save(user);
            logger.info("Created test user with ID: {}", savedUser.getId());

            // Create test account
            Account account = new Account();
            account.setUserId(savedUser.getId());
            account.setAccountHolderName("Test User");
            account.setBalance(1000.0);
            Account savedAccount = accountRepository.save(account);
            logger.info("Created test account with ID: {}", savedAccount.getId());

            return ResponseEntity.ok("Test data created successfully");
        } catch (Exception e) {
            logger.error("Error creating test data", e);
            return ResponseEntity.internalServerError().body("Error creating test data: " + e.getMessage());
        }
    }
}