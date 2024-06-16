import { Entity, Column, OneToMany } from 'typeorm';
import { Person } from './Person';
import { BaseModel } from './BaseModel';

@Entity()
export class Shift extends BaseModel {
  @Column()
  raceName: string;

  @OneToMany(() => Person, (person) => person.shifts)
  drivers: Person[];

  @OneToMany(() => Person, (person) => person.shifts)
  mechanics: Person[];

  @OneToMany(() => Person, (person) => person.shifts)
  strategists: Person[];
}
