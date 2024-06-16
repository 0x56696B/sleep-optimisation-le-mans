import { Injectable } from '@nestjs/common';
import { Team } from 'src/models/Team';
import AppDataSource from 'typeorm.config';

@Injectable()
export class TeamService {
  async insertTeamIntoDb(teamData: Team): Promise<Team> {
    // Create an instance of Team
    const team = AppDataSource.manager.create(Team, teamData);

    // Save the team, specifying the entity target
    const savedTeam = await AppDataSource.manager.save(Team, team);

    return savedTeam;
  }
}
