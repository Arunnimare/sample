# Stage 1: Build frontend
FROM node:18-alpine AS frontend-build
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm ci --only=production
COPY frontend/ ./
RUN npm run build

# Stage 2: Build backend
FROM eclipse-temurin:17-jdk-alpine AS backend-build
WORKDIR /app
COPY . .
RUN chmod +x mvnw

# Copy frontend build to Spring Boot static resources
COPY --from=frontend-build /frontend/build /app/src/main/resources/static

RUN ./mvnw clean package -DskipTests

# Stage 3: Runtime
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=backend-build /app/target/simple-bank-0.0.1-SNAPSHOT.jar app.jar
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN apk update && \
    apk add --no-cache curl && \
    chmod +x /docker-entrypoint.sh && \
    addgroup -g 1000 appuser && \
    adduser -u 1000 -G appuser -s /bin/sh -D appuser && \
    chown -R appuser:appuser /app
USER appuser
ENV PORT=10000
EXPOSE 10000
ENV SPRING_PROFILES_ACTIVE=prod
ENTRYPOINT ["/docker-entrypoint.sh"]