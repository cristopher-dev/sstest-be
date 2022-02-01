import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { TableStructure } from './table-structure.entity';

@Entity()
export class TableType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @OneToMany(
    (type) => TableStructure,
    (TableStructure) => TableStructure.fkTableType,
  )
  columns: TableStructure[];
}
