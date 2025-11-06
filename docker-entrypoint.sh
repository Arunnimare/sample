#!/bin/sh
echo "Checking environment variables..."

# Extract host from SPRING_DATASOURCE_URL if DATABASE_HOST is not set
if [ -z "$DATABASE_HOST" ] && [ ! -z "$SPRING_DATASOURCE_URL" ]; then
    export DATABASE_HOST=$(echo $SPRING_DATASOURCE_URL | sed -n 's/.*:\/\/\([^:]*\).*/\1/p')
fi

echo "Database connection details:"
echo "SPRING_DATASOURCE_URL=${SPRING_DATASOURCE_URL}"
echo "DATABASE_HOST=${DATABASE_HOST}"
echo "SPRING_DATASOURCE_USERNAME=${SPRING_DATASOURCE_USERNAME}"

echo "Starting application..."
exec "$@"