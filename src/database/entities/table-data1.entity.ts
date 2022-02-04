import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TableData1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  T1C1: number;

  @Column({ type: 'varchar', length: 50 })
  T1C2: string;

  @Column({ type: 'int', nullable: true })
  T1C3: number;

  @Column({
    type: 'datetime',
    nullable: true,
    transformer: {
      to: (v) => {
        const msg = 'T1C4 el formato de fecha es YYYY-MM-DD ejemplo 2022-01-01';

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
  T1C4: string;
}
