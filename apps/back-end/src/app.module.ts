import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { AnalyzeController } from './controllers/analyze.controller';
import { AnalyzeService } from './services/analyze.service';
import { TeamController } from './controllers/team.controller';
import { TeamService } from './services/team.service';
import { AiService } from './services/chatgpt.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [AnalyzeController, TeamController],
  providers: [AnalyzeService, TeamService, AiService],
})
export class AppModule {}
