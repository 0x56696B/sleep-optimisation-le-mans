import { Entity, Column, OneToMany } from 'typeorm';
import { Person } from './Person';
import { BaseModel } from './BaseModel';

@Entity()
export class Shift extends BaseModel {
  @Column()
  raceName: string;

  @OneToMany(() => Person, (person) => person.shifts, { cascade: true })
  drivers: Person[];

  @OneToMany(() => Person, (person) => person.shifts, { cascade: true })
  mechanics: Person[];

  @OneToMany(() => Person, (person) => person.shifts, { cascade: true })
  strategists: Person[];
}
