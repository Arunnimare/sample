package com.simplebank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.simplebank.repository.UserRepository;
import com.simplebank.repository.AccountRepository;
import com.simplebank.model.User;
import com.simplebank.model.Account;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/debug")
public class DatabaseCheckController {
    private static final Logger logger = LoggerFactory.getLogger(DatabaseCheckController.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AccountRepository accountRepository;

    @GetMapping("/db-status")
    public ResponseEntity<?> checkDatabaseEntries() {
        Map<String, Object> status = new HashMap<>();
        
        try {
            // Check Users
            List<User> users = userRepository.findAll();
            status.put("totalUsers", users.size());
            status.put("users", users);

            // Check Accounts
            List<Account> accounts = accountRepository.findAll();
            status.put("totalAccounts", accounts.size());
            status.put("accounts", accounts);

            // Add table information
            status.put("tables", new String[]{"USERS", "ACCOUNTS"});
            
            logger.info("Database check completed. Found {} users and {} accounts", 
                users.size(), accounts.size());
            
            return ResponseEntity.ok(status);
        } catch (Exception e) {
            logger.error("Error checking database entries", e);
            status.put("error", e.getMessage());
            return ResponseEntity.internalServerError().body(status);
        }
    }
}