import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamp } from '../../utilities/db/timestamp';
@Entity('todo')
export class Todo extends Timestamp {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    nullable: true,
  })
  name: string;
  @Column()
  description: string;
}
