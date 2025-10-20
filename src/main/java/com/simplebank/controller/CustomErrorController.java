package com.simplebank.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomErrorController implements ErrorController {
    
    @RequestMapping("/error")
    public String handleError() {
        return "Page not found. Please check the API documentation at the root URL '/' for available endpoints.";
    }
}