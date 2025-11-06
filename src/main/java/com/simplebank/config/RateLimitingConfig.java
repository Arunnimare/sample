package com.simplebank.config;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.Refill;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.HandlerInterceptor;
import java.time.Duration;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Configuration
public class RateLimitingConfig implements WebMvcConfigurer {

    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new RateLimitingInterceptor());
    }

    private class RateLimitingInterceptor implements HandlerInterceptor {
        @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
            String ip = request.getRemoteAddr();
            Bucket bucket = buckets.computeIfAbsent(ip, this::newBucket);

            if (bucket.tryConsume(1)) {
                return true;
            }

            response.setStatus(429); // Too Many Requests
            response.setHeader("X-Rate-Limit-Retry-After-Seconds", "60");
            return false;
        }

        private Bucket newBucket(String ip) {
            return Bucket.builder()
                .addLimit(Bandwidth.classic(100, Refill.intervally(100, Duration.ofMinutes(1))))
                .build();
        }
    }
}