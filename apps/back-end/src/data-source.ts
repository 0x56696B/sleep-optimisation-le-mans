import { DataSource } from 'typeorm';
import { config } from './config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: config().postgres.database.username,
  password: config().postgres.database.password,
  database: config().postgres.database.databaseName,
  synchronize: true,
  logging: true,
  entities: ['models/*.ts'],
});
