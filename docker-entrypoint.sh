#!/bin/sh
echo "Checking environment variables..."
echo "SPRING_DATASOURCE_URL=${SPRING_DATASOURCE_URL}"
echo "SPRING_DATASOURCE_USERNAME=${SPRING_DATASOURCE_USERNAME}"
echo "DATABASE_HOST=${DATABASE_HOST}"
echo "Starting application..."
exec "$@"