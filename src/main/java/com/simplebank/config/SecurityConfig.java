package com.simplebank.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import com.simplebank.service.UserService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Autowired
    private UserService userService;
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.userDetailsService(userService);
        http
            .headers(headers -> headers
                .contentSecurityPolicy(config -> config
                    .policyDirectives("default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"))
                .frameOptions(frame -> frame.deny())
            )
            .cors(cors -> cors.configurationSource(request -> {
                var corsConfig = new org.springframework.web.cors.CorsConfiguration();
                corsConfig.setAllowedOrigins(java.util.List.of("https://*.simplebank.com", "http://localhost:8080"));
                corsConfig.setAllowedMethods(java.util.List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                corsConfig.setAllowedHeaders(java.util.List.of("*"));
                corsConfig.setAllowCredentials(true);
                corsConfig.setMaxAge(3600L);
                return corsConfig;
            }))
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers(
                    "/",
                    "/index.html",
                    "/signin",
                    "/signin.html",
                    "/signup",
                    "/signup.html",
                    "/about",
                    "/about.html",
                    "/privacy",
                    "/privacy.html",
                    "/terms",
                    "/terms.html",
                    "/security",
                    "/security.html",
                    "/support",
                    "/support.html",
                    "/careers",
                    "/careers.html",
                    "/blog",
                    "/blog.html",
                    "/accounts",
                    "/accounts.html",
                    "/cards",
                    "/cards.html",
                    "/loans",
                    "/loans.html",
                    "/investments",
                    "/investments.html",
                    "/rewards",
                    "/rewards.html",
                    "/features/**",
                    "/css/**",
                    "/js/**",
                    "/images/**",
                    "/static/**"
                ).permitAll()
                .requestMatchers("/dashboard/**").authenticated()
                .anyRequest().permitAll()
            )
            .formLogin(form -> form
                .loginPage("/signin")
                .loginProcessingUrl("/login")
                .usernameParameter("username")
                .passwordParameter("password")
                .defaultSuccessUrl("/dashboard")
                .failureUrl("/signin?error=true")
                .permitAll()
            )
            .logout(logout -> logout
                .logoutSuccessUrl("/")
                .permitAll()
            )
            .csrf(csrf -> csrf.disable());
        
        return http.build();
    }
}