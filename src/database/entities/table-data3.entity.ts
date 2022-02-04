import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TableData3 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  T3C1: number;

  @Column({ type: 'varchar', length: 50 })
  T3C2: string;

  @Column({
    type: 'datetime',
  })
  T3C3: string;
}
