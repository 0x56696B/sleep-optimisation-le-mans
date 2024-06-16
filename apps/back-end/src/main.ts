import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { AppModule } from './app.module';
import { AppDataSource } from './data-source';
import { Migration } from 'typeorm';

declare const module: any;

async function bootstrap() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize()
      .then(() => {
        return AppDataSource.runMigrations({ transaction: 'each' });
      })
      .then((migrations: Migration[]) => {
        console.log({ migrationsToRun: migrations.map((x) => x.name) });
        console.log('Data Source has been initialized!');
        return AppDataSource.runMigrations();
      })
      .then(() => {
        console.log('Migrations have been run!');
      })
      .catch((error) => {
        console.error(
          'Error during data source initialization or migration',
          error,
        );
      });
  }

  const app = await NestFactory.create(AppModule);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
