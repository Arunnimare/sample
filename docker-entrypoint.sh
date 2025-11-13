#!/bin/sh
set -e

echo "=== Starting Simple Bank Application ==="
echo "Environment: ${SPRING_PROFILES_ACTIVE:-development}"
echo "Port: ${PORT:-10000}"

# Start the application
exec java \
  -Dserver.port="${PORT:-10000}" \
  -Djava.security.egd=file:/dev/./urandom \
  -XX:MaxRAMPercentage=75.0 \
  -XX:InitialRAMPercentage=50.0 \
  -Dspring.profiles.active="${SPRING_PROFILES_ACTIVE:-prod}" \
  -jar /app/app.jar