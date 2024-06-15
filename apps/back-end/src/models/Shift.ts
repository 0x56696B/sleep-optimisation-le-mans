import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import {Person} from './Person';

@Entity()
export class Shift extends BaseEntity {

  @Column
  raceName: string;

  @Column
  drivers: Array<Person>;

  @Column
  mechanics: Array<Person>;

  @Column
  strategists: Array<Person>;
}