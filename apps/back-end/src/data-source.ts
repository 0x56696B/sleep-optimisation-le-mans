import { DataSource } from 'typeorm';
import { config } from './config';
import * as dotenv from 'dotenv';
import { Person } from './models/Person';
import { Team } from './models/Team';
import { ActivityLevel } from './models/ActivityLevel';
import { BaseModel } from './models/BaseModel';
import { Shift } from './models/Shift';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: String(config().postgres.database.username),
  password: String(config().postgres.database.password),
  database: String(config().postgres.database.databaseName),
  synchronize: false,
  logging: true,
  entities: [BaseModel, Person, Team, ActivityLevel, Shift],
  // entities: ['./models/*.ts'], //TODO: Test if it can be a relative path from root
  migrations: ['./migrations/*{.js,.ts}'],
});
