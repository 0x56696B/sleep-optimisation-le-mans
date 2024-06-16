import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { AnalyzeController } from './controllers/Analyze.controller';
import { AnalyzeService } from './services/analyze.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [AnalyzeController],
  providers: [AnalyzeService],
})
export class AppModule {}
