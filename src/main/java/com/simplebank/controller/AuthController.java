package com.simplebank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import com.simplebank.model.User;
import com.simplebank.service.UserService;

@Controller
public class AuthController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/signup")
    public String showSignupPage() {
        return "forward:/signup.html";
    }
    
    @GetMapping("/signin")
    public String showSigninPage() {
        return "forward:/signin.html";
    }
    
    @PostMapping("/signup")
    @ResponseBody
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }
}