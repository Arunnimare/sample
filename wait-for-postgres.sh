#!/bin/sh
# wait-for-postgres.sh

set -e

# Extract host from SPRING_DATASOURCE_URL if DATABASE_HOST is not set
if [ -z "$DATABASE_HOST" ] && [ ! -z "$SPRING_DATASOURCE_URL" ]; then
    DATABASE_HOST=$(echo $SPRING_DATASOURCE_URL | sed -n 's/.*:\/\/\([^:]*\).*/\1/p')
fi

# Fallback to localhost if still not set
DATABASE_HOST=${DATABASE_HOST:-localhost}

echo "Waiting for PostgreSQL at host: $DATABASE_HOST"

until PGPASSWORD=$SPRING_DATASOURCE_PASSWORD psql -h "$DATABASE_HOST" -U "$SPRING_DATASOURCE_USERNAME" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec "$@"