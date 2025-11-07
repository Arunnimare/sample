package com.simplebank.config;

import org.apache.catalina.connector.Connector;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebServerConfiguration implements WebServerFactoryCustomizer<TomcatServletWebServerFactory> {
    private static final Logger logger = LoggerFactory.getLogger(WebServerConfiguration.class);

    @Value("${server.port:8080}")
    private int serverPort;

    @Override
    public void customize(TomcatServletWebServerFactory factory) {
        logger.info("Configuring embedded Tomcat server on port: {}", serverPort);
        
        factory.addConnectorCustomizers((Connector connector) -> {
            connector.setPort(serverPort);
            connector.setProperty("address", "0.0.0.0");
            
            // Log connector configuration
            logger.info("Tomcat connector configured with port: {} and address: {}", 
                       connector.getPort(), 
                       connector.getProperty("address"));
        });
        
        // Set additional server properties
        factory.addProtocolHandlerCustomizers(protocolHandler -> {
            protocolHandler.setMaxThreads(20);
            protocolHandler.setMinSpareThreads(5);
            logger.info("Protocol handler configured with maxThreads: 20, minSpareThreads: 5");
        });
    }
}