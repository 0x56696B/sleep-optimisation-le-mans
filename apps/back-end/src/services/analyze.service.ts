import { Injectable } from '@nestjs/common';
import { Team } from 'src/models/Team';
import AppDataSource from 'typeorm.config';
import { ChatGptService } from './chatgpt.service';

@Injectable()
export class AnalyzeService {
  constructor(private readonly aiService: ChatGptService) {}
  public async analyzeTeam(teamId: number): Promise<string> {
    const teamRepo = AppDataSource.getRepository(Team);

    const team = await teamRepo.findOne({
      where: { id: teamId },
      relations: ['people', 'people.activityLevel', 'people.shifts'],
    });

    const prompt = createPrompt(team);

    const aiResult = await this.aiService.sendTextToAI(prompt);
    console.log({ aiResult });

    return aiResult;
  }
}
function createPrompt(team: Team) {
  console.log({ team });
  return '';
}
