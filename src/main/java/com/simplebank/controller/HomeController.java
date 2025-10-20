package com.simplebank.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    
    @GetMapping("/")
    public String welcome() {
        return "Welcome to SimpleBank API!\n\nAvailable endpoints:\n" +
               "- GET /api/accounts - List all accounts\n" +
               "- POST /api/accounts - Create a new account\n" +
               "- GET /api/accounts/{id} - Get account by ID";
    }
}