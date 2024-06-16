import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { AnalyzeController } from './controllers/Analyze.controller';
import { AnalyzeService } from './services/analyze.service';
import { PersonController } from './controllers/PersonController';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [AnalyzeController, PersonController],
  providers: [AnalyzeService],
})
export class AppModule {}
