#!/bin/bash

# Load environment variables from .env file
export $(grep -v '^#' .env | xargs)

# Get the container ID of the running PostgreSQL container
CONTAINER_ID=$(docker ps -q --filter "name=sleep-optimiser-db")

# Execute the command inside the Docker container
docker exec -it $CONTAINER_ID bash -c "psql -v ON_ERROR_STOP=1 --username \"$SLEEP_OPTIMISER_DB_USERNAME\" -c 'CREATE DATABASE IF NOT EXISTS $SLEEP_OPTIMISER_DB_DATABASE OWNER $SLEEP_OPTIMISER_DB_USERNAME;'"

