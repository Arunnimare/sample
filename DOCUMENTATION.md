# Simple Bank Application Documentation

## Project Structure

```
SimpleBank/
├── src/
│   ├── main/
│   │   ├── java/com/simplebank/
│   │   │   ├── SimpleBankApplication.java     # Main application entry point
│   │   │   ├── config/                        # Configuration classes
│   │   │   │   ├── EncoderConfig.java        # Password encoder configuration
│   │   │   │   ├── SecurityConfig.java       # Spring Security configuration
│   │   │   │   ├── WebConfig.java           # Web configuration
│   │   │   │   └── WebMvcConfig.java        # MVC configuration
│   │   │   ├── controller/                    # REST controllers
│   │   │   │   ├── AccountController.java    # Account management endpoints
│   │   │   │   ├── AuthController.java       # Authentication endpoints
│   │   │   │   ├── CustomErrorController.java # Error handling
│   │   │   │   └── HomeController.java       # Main page routing
│   │   │   ├── model/                        # Data models
│   │   │   │   ├── Account.java             # Account entity
│   │   │   │   └── User.java               # User entity
│   │   │   ├── repository/                   # Data access layer
│   │   │   │   ├── AccountRepository.java   # Account data operations
│   │   │   │   └── UserRepository.java      # User data operations
│   │   │   └── service/                      # Business logic layer
│   │   │       └── UserService.java         # User management logic
│   │   └── resources/
│   │       ├── static/                       # Static web resources
│   │       │   ├── css/                     # Stylesheets
│   │       │   │   ├── dashboard.css        # Dashboard styling
│   │       │   │   ├── modern-effects.css   # Modern UI effects
│   │       │   │   └── style.css           # Global styles
│   │       │   ├── js/                      # JavaScript files
│   │       │   │   └── script.js           # Client-side logic
│   │       │   └── [HTML files]            # Web pages
│   │       └── application.properties        # Application configuration
│   └── test/                                # Test files
└── pom.xml                                  # Project dependencies

```

## Core Components

### 1. Models

#### User Entity (`User.java`)
- Primary user information storage
- Fields:
  - id (Long): Primary key
  - username (String): Unique username
  - password (String): Encrypted password
  - email (String): User's email
  - roles (Set<String>): User's security roles

#### Account Entity (`Account.java`)
- Banking account information
- Fields:
  - id (Long): Primary key
  - userId (Long): Associated user ID
  - accountHolderName (String): Name on account
  - balance (Double): Current balance

### 2. Repositories

#### UserRepository
- Extends: JpaRepository<User, Long>
- Functions:
  - findByUsername(String username): Find user by username
  - existsByUsername(String username): Check if username exists
  - existsByEmail(String email): Check if email exists

#### AccountRepository
- Extends: JpaRepository<Account, Long>
- Functions:
  - findByUserId(Long userId): Find account by user ID

### 3. Services

#### UserService
- User management and authentication
- Functions:
  - createUser(User user): Register new user
  - findByUsername(String username): Find user details
  - updateUser(User user): Update user information
  - validateUser(String username, String password): Validate credentials

### 4. Controllers

#### AuthController
- Endpoints:
  - POST /api/auth/signup: Register new user
  - POST /api/auth/signin: User login
  - POST /api/auth/logout: User logout

#### AccountController
- Endpoints:
  - GET /api/accounts: List all accounts
  - GET /api/accounts/{id}: Get account details
  - POST /api/accounts: Create new account
  - GET /api/dashboard: Get dashboard data

#### HomeController
- Web page routing
- Endpoints:
  - GET /: Home page
  - GET /dashboard: User dashboard
  - GET /signup: Registration page
  - GET /signin: Login page

### 5. Configuration

#### SecurityConfig
- Spring Security configuration
- Features:
  - Password encryption
  - Authentication filters
  - Session management
  - CSRF protection
  - URL-based security rules

#### WebMvcConfig
- MVC configuration
- Features:
  - View resolvers
  - Resource handlers
  - CORS configuration
  - Interceptors

## Frontend Structure

### HTML Pages
- `index.html`: Landing page
- `dashboard.html`: Main user interface after login
- `signin.html`: Login page
- `signup.html`: Registration page
- Additional pages:
  - accounts.html
  - transactions.html
  - support.html
  - about.html
  - etc.

### CSS Files
1. `style.css`: Global styles
2. `dashboard.css`: Dashboard-specific styles
   - Modern card layouts
   - Responsive grid system
   - Transaction lists
   - Account summary styles
3. `modern-effects.css`: UI effects and animations

### JavaScript
`script.js`: Client-side functionality
- API calls
- Form validation
- Dynamic content updates
- Real-time balance updates
- Transaction history management

## Security Features

1. Authentication
   - Username/password authentication
   - Session management
   - Password encryption
   - Login attempt throttling

2. Authorization
   - Role-based access control
   - Secured endpoints
   - Protected API routes

3. Data Security
   - HTTPS support
   - CSRF protection
   - XSS prevention
   - SQL injection protection

## API Endpoints

### Authentication
```
POST /api/auth/signup
POST /api/auth/signin
POST /api/auth/logout
```

### Account Management
```
GET /api/accounts
GET /api/accounts/{id}
POST /api/accounts
GET /api/dashboard
```

### User Management
```
GET /api/users/{id}
PUT /api/users/{id}
DELETE /api/users/{id}
```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

### Accounts Table
```sql
CREATE TABLE accounts (
    id BIGINT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    account_holder_name VARCHAR(255) NOT NULL,
    balance DECIMAL(19,2) DEFAULT 0.00,
    created_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## Build and Deployment

## Local Development

### Prerequisites
- Java 17 or higher
- Maven 3.6+
- PostgreSQL database

### Build Commands
```bash
# Clean and build
./mvnw clean install

# Run application
./mvnw spring-boot:run

# Run tests
./mvnw test
```

## Environment Variables and Configuration

### Development Properties (application.properties)
```properties
# Server configuration
server.port=8080
server.error.whitelabel.enabled=false

# Database configuration
spring.datasource.url=jdbc:postgresql://localhost:5432/simplebank
spring.datasource.username=postgres
spring.datasource.password=password

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=true
```

### Production Properties (application-prod.properties)
```properties
# Server Configuration
server.port=${PORT:8080}
server.address=0.0.0.0

# Database Connection
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=${SPRING_DATASOURCE_URL}
spring.datasource.username=${SPRING_DATASOURCE_USERNAME}
spring.datasource.password=${SPRING_DATASOURCE_PASSWORD}

# Connection Pool Settings
spring.datasource.tomcat.max-active=3
spring.datasource.tomcat.max-idle=1
spring.datasource.tomcat.test-on-borrow=true
spring.datasource.tomcat.validation-query=SELECT 1

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.show-sql=false

# Cache Configuration
spring.cache.type=caffeine
spring.cache.caffeine.spec=maximumSize=500,expireAfterAccess=600s

# Actuator Configuration
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=never
management.endpoint.health.probes.enabled=true
management.health.livenessstate.enabled=true
management.health.readinessstate.enabled=true
```

## Database Configuration (DatabaseConfig.java)

The database configuration is handled by the `DatabaseConfig` class, which creates and manages the database connection:

```java
@Configuration
public class DatabaseConfig {
    @Value("${spring.datasource.url}")
    private String url;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        return dataSource;
    }
}
```

## Deployment on Render

### render.yaml Configuration
```yaml
services:
  - type: web
    name: simplebank
    buildCommand: ./mvnw clean package -DskipTests
    startCommand: java -jar target/*.jar
    envVars:
      - key: JAVA_TOOL_OPTIONS
        value: "-Xmx400m -XX:+UseContainerSupport -Dfile.encoding=UTF-8"
      - key: SPRING_PROFILES_ACTIVE
        value: prod
      - key: SPRING_DATASOURCE_URL
        fromDatabase:
          name: simplebank_db
          property: connectionString
      - key: SPRING_DATASOURCE_USERNAME
        fromDatabase:
          name: simplebank_db
          property: username
      - key: SPRING_DATASOURCE_PASSWORD
        fromDatabase:
          name: simplebank_db
          property: password

databases:
  - name: simplebank_db
    plan: free
    ipAllowList: []
```

### Environment Variables
1. Application Settings
   - `PORT`: Application port (set by Render)
   - `SPRING_PROFILES_ACTIVE`: Active profile (prod)
   - `JAVA_TOOL_OPTIONS`: JVM configuration

2. Database Settings
   - `SPRING_DATASOURCE_URL`: Database connection URL
   - `SPRING_DATASOURCE_USERNAME`: Database username
   - `SPRING_DATASOURCE_PASSWORD`: Database password
   - `DATABASE_HOST`: Database host (extracted from URL)

## Application Startup and Health Monitoring

### Startup Logging
The application includes detailed startup logging through the StartupLogger component:

```java
@Component
class StartupLogger {
    @EventListener
    public void onApplicationStarted(ApplicationStartedEvent event) {
        logger.info("Application started on {}:{}", address, port);
        logger.info("Environment variables:");
        logger.info("PORT={}", System.getenv("PORT"));
        logger.info("SPRING_PROFILES_ACTIVE={}", System.getenv("SPRING_PROFILES_ACTIVE"));
    }
}
```

### Health Checks
1. Database Connection: Validates database connectivity
2. Application Status: Monitors application health
3. Memory Usage: Tracks JVM memory utilization

## Performance Optimization

### Connection Pool Settings
- Maximum Active Connections: 3
- Minimum Idle Connections: 1
- Connection Test: Enabled
- Validation Query: SELECT 1

### Memory Settings
- Maximum Heap: 400MB
- Initial Heap: Based on container
- GC Configuration: Container-aware

## Monitoring and Troubleshooting

### Logging Configuration
```properties
logging.level.root=INFO
logging.level.org.springframework.web=INFO
logging.level.org.hibernate=INFO
logging.level.com.simplebank=INFO
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %logger{36} - %msg%n
```

### Health Endpoints
- `/actuator/health`: Overall health status
- `/actuator/info`: Application information
- `/actuator/metrics`: Performance metrics