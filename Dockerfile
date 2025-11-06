FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY . .
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/simple-bank-0.0.1-SNAPSHOT.jar app.jar
COPY wait-for-postgres.sh /wait-for-postgres.sh
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN apk update && \
    apk add --no-cache postgresql15-client && \
    chmod +x /wait-for-postgres.sh && \
    chmod +x /docker-entrypoint.sh
EXPOSE 8080
ENV SPRING_PROFILES_ACTIVE=prod
# Set default value for DATABASE_URL if not provided
ENV DATABASE_URL=jdbc:postgresql://localhost:5432/simplebank
ENV POSTGRES_URL=${DATABASE_URL:-jdbc:postgresql://localhost:5432/simplebank}
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["java", \
     "-Djava.security.egd=file:/dev/./urandom", \
     "-Dspring.profiles.active=prod", \
     "-Dlogging.level.org.hibernate=DEBUG", \
     "-Dlogging.level.com.zaxxer.hikari=DEBUG", \
     "-Dlogging.level.com.simplebank.config=DEBUG", \
     "-jar", "app.jar"]