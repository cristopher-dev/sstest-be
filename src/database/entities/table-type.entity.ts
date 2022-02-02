import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { TableStructure } from './table-structure.entity';

@Entity()
export class TableType {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ type: 'varchar', length: 30 })
  readonly name: string;

  @OneToMany(
    (type) => TableStructure,
    (TableStructure) => TableStructure.fkTableType,
  )
  readonly columns: TableStructure[];
}
