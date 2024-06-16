#!/bin/bash

# Check if an argument is provided
if [ -z "$1" ]; then
  echo "Error: Migration name is required."
  exit 1
fi

# Get the migration name from the first argument
migration_name=$1

# Run the TypeORM migration:create command with the provided argument
# npx typeorm-ts-node-esm migration:generate --dataSource ./src/data-source.ts ./migrations/$migration_name
npm run typeorm -- migration:generate -d ./typeorm.config.ts ./migrations/$migration_name

# Check if the command was successful
if [ $? -eq 0 ]; then
  echo "Migration '$migration_name' created successfully."
else
  echo "Error: Failed to create migration '$migration_name'."
  exit 1
fi
