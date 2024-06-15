import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class ActivityLevel extends BaseEntity {

  //from 1 to 10
  //grade
  @Column
  level: number;
}