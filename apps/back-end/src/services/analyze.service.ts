import { Injectable } from '@nestjs/common';
import { Team } from 'src/models/Team';
import AppDataSource from 'typeorm.config';

@Injectable()
export class AnalyzeService {
  public async analyzeTeam(teamId: number) {
    const teamRepo = AppDataSource.getRepository(Team);

    const team = await teamRepo.findOne({
      where: { id: teamId },
      relations: ['people', 'people.activityLevel', 'people.shifts'],
    });

    // Perform additional analysis if needed
    console.log({ team });

    //TODO: Fetch team from database with all drivers/managers/strategists
    //TODO: analyze
    //
    //TODO: Return data

    return teamId;
  }
}
