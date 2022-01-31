import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TableData2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  T2C1: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  T2C2: string;

  @Column({ type: 'int', nullable: true })
  T2C3: number;

  @Column({ type: 'datetime' })
  T2C4: string;

  @Column({ type: 'int' })
  T2C5: number;
}
