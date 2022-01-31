import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TableData1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  T1C1: number;

  @Column({ type: 'varchar', length: 100 })
  T1C2: string;

  @Column({ type: 'int' })
  T1C3: number;

  @Column({ type: 'datetime', nullable: true })
  T1C4: string;
}
