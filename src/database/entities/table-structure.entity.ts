import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { TableType } from './table-type.entity';

@Entity()
export class TableStructure {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => TableType, (TableType) => TableType.columns)
  fkTableType: number;

  @Column({ type: 'varchar', length: 20 })
  header: string;

  @Column({ type: 'varchar', length: 10 })
  dataType: string | number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  format: string;

  @Column({ type: 'bit' })
  required: boolean;
}
