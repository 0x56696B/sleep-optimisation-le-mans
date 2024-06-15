import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { Person } from './Person';
import { BaseModel } from './BaseModel';

@Entity()
export class ActivityLevel extends BaseModel {
  //scale from 1 to 10
  @OneToOne(() => Person)
  @JoinColumn()
  level: number = 1;
}
