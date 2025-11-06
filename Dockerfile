FROM eclipse-temurin:17-jdk-alpine as build
WORKDIR /app
COPY . .
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/simple-bank-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENV SPRING_PROFILES_ACTIVE=prod
ENTRYPOINT java \
    -Djava.security.egd=file:/dev/./urandom \
    -Dspring.profiles.active=prod \
    -Dspring.datasource.url="${SPRING_DATASOURCE_URL}" \
    -Dspring.datasource.username="${SPRING_DATASOURCE_USERNAME}" \
    -Dspring.datasource.password="${SPRING_DATASOURCE_PASSWORD}" \
    -Dlogging.level.org.hibernate=DEBUG \
    -Dlogging.level.com.zaxxer.hikari=DEBUG \
    -jar app.jar