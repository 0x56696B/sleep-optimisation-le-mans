export const config = () => ({
  postgres: {
    database: {
      connectionString: process.env.SLEEP_OPTIMISER_DB_CONNECION_STRING,
      databaseName: process.env.SLEEP_OPTIMISER_DB_DATABASE,
      username: process.env.SLEEP_OPTIMISER_DB_USERNAME,
      password: process.env.SLEEP_OPTIMISER_DB_PASSWORD,
    },
  },
  ai: {
    apiUrl: process.env.AI_API_URL,
  },
});
