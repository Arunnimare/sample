FROM eclipse-temurin:17-jdk-alpine as build
WORKDIR /app
COPY . .
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/simple-bank-0.0.1-SNAPSHOT.jar app.jar
COPY wait-for-postgres.sh /wait-for-postgres.sh
RUN apk add --no-cache postgresql-client && chmod +x /wait-for-postgres.sh
EXPOSE 8080
ENV SPRING_PROFILES_ACTIVE=prod
ENTRYPOINT java \
    -Djava.security.egd=file:/dev/./urandom \
    -Dspring.profiles.active=prod \
    -Dlogging.level.org.hibernate=DEBUG \
    -Dlogging.level.com.zaxxer.hikari=DEBUG \
    -Dlogging.level.com.simplebank.config=DEBUG \
    -jar app.jar