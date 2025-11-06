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

### Prerequisites
- Java 17 or higher
- Maven 3.6+
- MySQL/PostgreSQL database

### Build Commands
```bash
# Clean and build
mvn clean install

# Run application
mvn spring-boot:run

# Run tests
mvn test
```

### Application Properties
```properties
# Server configuration
server.port=8080

# Database configuration
spring.datasource.url=jdbc:mysql://localhost:3306/simplebank
spring.datasource.username=root
spring.datasource.password=password

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```