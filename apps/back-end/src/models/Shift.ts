import { Entity, Column } from 'typeorm';
import { Person } from './Person';
import { BaseModel } from './BaseModel';

@Entity()
export class Shift extends BaseModel {
  @Column()
  raceName: string;

  @Column()
  drivers: Array<Person>;

  @Column()
  mechanics: Array<Person>;

  @Column()
  strategists: Array<Person>;
}
