package com.simplebank.controller;

import com.simplebank.model.Account;
import com.simplebank.model.User;
import com.simplebank.repository.AccountRepository;
import com.simplebank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;

@RestController
public class AccountController {
    
    @Autowired
    private AccountRepository accountRepository;
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/api/accounts")
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }
    
    @PostMapping("/api/accounts")
    public Account createAccount(@Valid @RequestBody Account account) {
        return accountRepository.save(account);
    }
    
    @GetMapping("/api/accounts/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable Long id) {
        return accountRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/api/dashboard")
    public ResponseEntity<Map<String, Object>> getDashboardData() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByUsername(auth.getName());
        
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        
        Map<String, Object> dashboardData = new HashMap<>();
        dashboardData.put("userName", user.getUsername());
        
        // Get user's account balance
        Account account = accountRepository.findByUserId(user.getId())
                .orElseGet(() -> {
                    Account newAccount = new Account();
                    newAccount.setUserId(user.getId());
                    newAccount.setAccountHolderName(user.getFullName() != null ? user.getFullName() : user.getUsername());
                    newAccount.setBalance(0.0);
                    return accountRepository.save(newAccount);
                });
                
        dashboardData.put("balance", account.getBalance());
        
        // Mock recent transactions for now
        List<Map<String, Object>> recentTransactions = new ArrayList<>();
        Map<String, Object> transaction1 = new HashMap<>();
        transaction1.put("description", "Grocery Store");
        transaction1.put("amount", -85.50);
        transaction1.put("date", System.currentTimeMillis());
        
        Map<String, Object> transaction2 = new HashMap<>();
        transaction2.put("description", "Salary Deposit");
        transaction2.put("amount", 3500.00);
        transaction2.put("date", System.currentTimeMillis() - 86400000); // 1 day ago
        
        recentTransactions.add(transaction1);
        recentTransactions.add(transaction2);
        
        dashboardData.put("recentTransactions", recentTransactions);
        
        return ResponseEntity.ok(dashboardData);
    }
}