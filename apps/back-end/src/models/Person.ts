import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { ActivityLevel } from './ActivityLevel';
import { BaseModel } from './BaseModel';
import { Shift } from './Shift';

@Entity()
export class Person extends BaseModel {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  //in years
  @Column()
  experience: number;

  @Column()
  weight: number;

  @Column()
  height: number;

  //for the past 72 hours
  @Column()
  sleepTime: number;

  @Column()
  role: string;

  //grade
  @OneToOne(() => ActivityLevel)
  @JoinColumn()
  activityLevel: ActivityLevel;

  @ManyToOne(() => Shift)
  shifts: Shift;
}
