import { Controller, Post, Body } from '@nestjs/common';
// import { Team } from 'src/models/Team';

@Controller('api/team')
export class TeamController {
  @Post('create')
  createTeam(@Body('team') postData: any) {
    console.log({ postData });
    return 'uha stana';
  }
}
