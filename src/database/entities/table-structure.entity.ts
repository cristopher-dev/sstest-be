import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { TableType } from './table-type.entity';

@Entity()
export class TableStructure {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @ManyToOne((type) => TableType, (TableType) => TableType.columns)
  readonly fkTableType: number;

  @Column({ type: 'varchar', length: 20 })
  readonly header: string;

  @Column({ type: 'varchar', length: 10 })
  readonly dataType: string | number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  readonly format: string;

  @Column({
    type: 'bit',
    transformer: {
      to: (v) => v,
      from: (v: Buffer) => (v.readInt8(0) ? true : false),
    },
  })
  readonly required: boolean;
}
