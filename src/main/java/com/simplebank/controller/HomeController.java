package com.simplebank.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.security.core.Authentication;

@Controller
public class HomeController {
    
    @GetMapping(value = {"/", "/home"})
    public String home() {
        return "forward:/index.html";
    }

    @GetMapping("/dashboard")
    public String dashboard(Authentication authentication, Model model) {
        if (authentication != null) {
            model.addAttribute("username", authentication.getName());
        }
        return "forward:/dashboard.html";
    }

    @GetMapping("/health")
    @ResponseBody
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("OK");
    }
}