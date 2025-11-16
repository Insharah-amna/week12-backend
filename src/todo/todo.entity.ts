import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo')
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
