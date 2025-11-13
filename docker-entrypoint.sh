#!/bin/sh
set -e

echo "=== Starting Simple Bank Application ==="
echo "Environment: ${SPRING_PROFILES_ACTIVE:-development}"
echo "Port: ${PORT:-10000}"

# Check if database environment variables are set
if [ -n "$SPRING_DATASOURCE_URL" ]; then
    echo "Database URL configured: ${SPRING_DATASOURCE_URL}"
else
    echo "WARNING: SPRING_DATASOURCE_URL not set"
fi

# Check if JAR exists
if [ ! -f /app/app.jar ]; then
    echo "ERROR: /app/app.jar not found!"
    exit 1
fi

echo "Starting application with Java..."

# Start the application
exec java \
  -Dserver.port="${PORT:-10000}" \
  -Djava.security.egd=file:/dev/./urandom \
  -XX:MaxRAMPercentage=75.0 \
  -XX:InitialRAMPercentage=50.0 \
  -Dspring.profiles.active="${SPRING_PROFILES_ACTIVE:-prod}" \
  -Dlogging.level.root=INFO \
  -Dlogging.level.com.simplebank=DEBUG \
  -jar /app/app.jar