import { Controller, Get, Query } from '@nestjs/common';
import { AnalyzeService } from 'src/services/analyze.service';

@Controller('analyze')
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeService) {}

  @Get()
  async analyze(@Query('teamId') teamId: number): Promise<string> {
    const analistResults = await this.analyzeService.analyzeTeam(teamId);

    return '';
  }
}

