import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ActivityLevel } from './ActivityLevel';

@Entity()
export class Person extends BaseEntity {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  age: number;

  @Column
  gender: string;

  //in years
  @Column
  experience: number;

  //grade
  @Column
  activityLevel: ActivityLevel;

  @Column
  weight: number;

  @Column
  height: number;

  //for the past 72 hours
  @Column
  sleepTime: number;

  @Column
  role: string;
}