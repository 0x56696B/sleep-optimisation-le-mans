import { Column } from 'typeorm';
import { Person } from './Person';
import { BaseModel } from './BaseModel';

export class Team extends BaseModel {
  @Column()
  name: string;

  @Column()
  people: Person[];
}
