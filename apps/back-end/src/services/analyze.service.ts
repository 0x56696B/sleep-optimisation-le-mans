import { Injectable } from '@nestjs/common';
import { Team } from 'src/models/Team';
import AppDataSource from 'typeorm.config';
import { AiService } from './chatgpt.service';

@Injectable()
export class AnalyzeService {
  constructor(private readonly aiService: AiService) {}
  public async analyzeTeam(teamId: number): Promise<string> {
    const teamRepo = AppDataSource.getRepository(Team);

    const team = await teamRepo.findOne({
      where: { id: teamId },
      relations: ['people', 'people.activityLevel', 'people.shifts'],
    });

    const prompt = await this.aiService.createPrompt(team);

    return await this.aiService.sendTextToAI(prompt);
  }
}
