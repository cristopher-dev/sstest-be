import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as moment from 'moment';

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
      to: (v) => v,
      from: (v) => {
        const day = parseInt(moment(v).format('D'));
        const date = moment(v)
          .set('date', day + 1)
          .format('YYYY-MM-DD');
        const hms = moment().format('HH:mm:ss');

        return date + ' ' + hms;
      },
    },
  })
  T1C4: string;
}
