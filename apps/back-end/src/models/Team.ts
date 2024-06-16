import { Column, Entity, OneToMany } from 'typeorm';
import { Person } from './Person';
import { BaseModel } from './BaseModel';

@Entity()
export class Team extends BaseModel {
  @Column()
  name: string;

  @OneToMany(() => Person, (person) => person.team, { cascade: true })
  people: Person[];
}
