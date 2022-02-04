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
    transformer: {
      to: (v) => {
        const msg = 'T3C3 el formato de fecha es "HH:mm:ss ejemplo 2022-01-01';

        if (isNaN(v)) throw msg;

        const date = new Date(v).toISOString();

        const isDate = date.toLowerCase().includes('invalid');

        if (isDate) throw msg;

        return date;
      },
      from: (v) => v,
    },
  })
  T3C3: string;
}
