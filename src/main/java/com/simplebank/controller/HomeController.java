package com.simplebank.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
public class HomeController {
    
    @GetMapping(value = "/", produces = "text/html")
    public String welcome() {
        return """
            <!DOCTYPE html>
            <html>
            <head>
                <title>SimpleBank API</title>
                <style>
                    body {
                        font-family: 'Segoe UI', Arial, sans-serif;
                        line-height: 1.6;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #f5f5f5;
                    }
                    .container {
                        background-color: white;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    h1 {
                        color: #2c3e50;
                        text-align: center;
                        margin-bottom: 30px;
                        border-bottom: 2px solid #3498db;
                        padding-bottom: 10px;
                    }
                    .endpoint {
                        background-color: #f8f9fa;
                        padding: 15px;
                        margin: 10px 0;
                        border-left: 4px solid #3498db;
                        border-radius: 4px;
                    }
                    .method {
                        color: #e74c3c;
                        font-weight: bold;
                    }
                    .path {
                        color: #2980b9;
                        font-family: monospace;
                        font-size: 1.1em;
                    }
                    .description {
                        color: #7f8c8d;
                        margin-top: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🏦 Welcome to SimpleBank API</h1>
                    
                    <h2>Available Endpoints</h2>
                    
                    <div class="endpoint">
                        <span class="method">GET</span>
                        <span class="path">/api/accounts</span>
                        <div class="description">List all accounts in the system</div>
                    </div>
                    
                    <div class="endpoint">
                        <span class="method">POST</span>
                        <span class="path">/api/accounts</span>
                        <div class="description">Create a new bank account</div>
                    </div>
                    
                    <div class="endpoint">
                        <span class="method">GET</span>
                        <span class="path">/api/accounts/{id}</span>
                        <div class="description">Retrieve details of a specific account by ID</div>
                    </div>
                </div>
            </body>
            </html>
            """;
    }

    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("OK");
    }
}