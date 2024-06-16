import { Column, Entity, OneToOne } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Person } from './Person';

@Entity()
export class ActivityLevel extends BaseModel {
  //scale from 1 to 10
  @Column()
  level: number = 1;

  @OneToOne(() => Person)
  user: Person;
}
