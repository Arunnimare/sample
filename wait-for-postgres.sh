#!/bin/sh
# wait-for-postgres.sh

set -e

until PGPASSWORD=$SPRING_DATASOURCE_PASSWORD psql -h "$DATABASE_HOST" -U "$SPRING_DATASOURCE_USERNAME" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec "$@"