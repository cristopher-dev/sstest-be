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

  @Column({
    type: 'datetime',
    transformer: {
      to: (v) => {
        const msg =
          'T2C4 el formato de fecha es YYYY-DD-MM HH:mm:ss ejemplo 2022-01-01';

        try {
          const date = new Date(v).toISOString();
          const isDate = date.toLowerCase().includes('invalid');
          if (isDate) throw msg;
          return date;
        } catch (error) {
          throw msg;
        }
      },
      from: (v) => v,
    },
  })
  T2C4: string;

  @Column({ type: 'int' })
  T2C5: number;
}
