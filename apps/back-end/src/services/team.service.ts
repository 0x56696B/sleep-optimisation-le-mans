import { Injectable } from '@nestjs/common';
import { Team } from 'src/models/Team';
import { InsertResult } from 'typeorm';
import AppDataSource from 'typeorm.config';

@Injectable()
export class TeamService {
  public async insertTeamIntoDb(team: Team) {
    try {
      const result: InsertResult = await AppDataSource.createQueryBuilder()
        .insert()
        .into(Team)
        .values(team)
        .execute();

      console.log({ result });

      return 'some-id';
    } catch (error) {}
  }
}
