import { Controller, Get } from '@nestjs/common';
import { AnalyzeService } from 'src/services/analyze.service';

@Controller()
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeService) {}

  @Get()
  analyze(teamId: number): string {
    // return this.analyzeService.analyzeTeam(teamId);
    return '';
  }
}

