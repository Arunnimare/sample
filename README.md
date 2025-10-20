# SimpleBank Application

This is a simple banking application built with Spring Boot that provides basic banking functionality.

## Requirements

- Java 17 or higher
- Maven 3.6 or higher

## Technologies Used

- Spring Boot 3.2.0
- Spring Data JPA
- H2 Database
- Lombok
- Spring Web
- Spring Validation

## Getting Started

1. Clone the repository
2. Navigate to the project directory
3. Run the application using Maven:
   ```
   mvn spring-boot:run
   ```

The application will start on port 8080 by default.

## Features

- Basic banking operations
- H2 in-memory database
- RESTful API endpoints

## Database

The application uses H2 in-memory database. You can access the H2 console at:
http://localhost:8080/h2-console

Database credentials:
- JDBC URL: jdbc:h2:mem:bankdb
- Username: sa
- Password: (empty)

## Development

This is a Maven project. You can import it into your IDE of choice.