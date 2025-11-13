FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY . .
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/simple-bank-0.0.1-SNAPSHOT.jar app.jar
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