import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TableStructure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  TableTypeId: string;

  @Column({ type: 'varchar', length: 20 })
  header: string;

  @Column({ type: 'varchar', length: 10 })
  dataType: string | number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  format: string;

  @Column({ type: 'bit' })
  required: boolean;
}
