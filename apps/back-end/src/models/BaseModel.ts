import { Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
