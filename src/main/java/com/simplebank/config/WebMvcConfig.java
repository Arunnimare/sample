package com.simplebank.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/index.html");
        registry.addViewController("/signin").setViewName("forward:/signin.html");
        registry.addViewController("/signup").setViewName("forward:/signup.html");
        registry.addViewController("/about").setViewName("forward:/about.html");
        registry.addViewController("/privacy").setViewName("forward:/privacy.html");
        registry.addViewController("/terms").setViewName("forward:/terms.html");
        registry.addViewController("/security").setViewName("forward:/security.html");
        registry.addViewController("/support").setViewName("forward:/support.html");
        registry.addViewController("/careers").setViewName("forward:/careers.html");
        registry.addViewController("/blog").setViewName("forward:/blog.html");
        registry.addViewController("/accounts").setViewName("forward:/accounts.html");
        registry.addViewController("/cards").setViewName("forward:/cards.html");
        registry.addViewController("/loans").setViewName("forward:/loans.html");
        registry.addViewController("/investments").setViewName("forward:/investments.html");
        registry.addViewController("/rewards").setViewName("forward:/rewards.html");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(0);
        
        registry.addResourceHandler("/features/**")
                .addResourceLocations("classpath:/static/features/")
                .setCachePeriod(0);
    }
}