import { Connection } from 'typeorm';
import { TableData1 } from '../entities/table-data1.entity';

export const tableData1Providers = [
  {
    provide: 'TABLE_DATA1_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(TableData1),
    inject: ['DATABASE_CONNECTION'],
  },
];
