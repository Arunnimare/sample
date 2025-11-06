#!/bin/sh
echo "Checking environment variables..."
echo "DATABASE_URL=${DATABASE_URL}"
echo "POSTGRES_URL=${POSTGRES_URL}"
echo "Starting application..."
exec "$@"