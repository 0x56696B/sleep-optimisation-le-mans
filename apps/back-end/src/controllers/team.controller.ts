import { Controller, Post, Body } from '@nestjs/common';
import { Team } from 'src/models/Team';
import { TeamService } from 'src/services/team.service';

@Controller('api/team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('create')
  async createTeam(@Body('team') teamData: Team): Promise<Team> {
    const insertedTeam = await this.teamService.insertTeamIntoDb(teamData);

    console.log({ insertedTeam });

    return insertedTeam;
  }
}
