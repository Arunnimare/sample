#!/bin/sh

# Health check script for production

# Check if the application is responding
status_code=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:${PORT:-8080}/actuator/health)

if [ "$status_code" = "200" ]; then
    exit 0
else
    exit 1
fi