import { Connection } from 'typeorm';
import { TableData3 } from '../entities/table-data3.entity';

export const tableData3Providers = [
  {
    provide: 'TABLE_DATA3_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(TableData3),
    inject: ['DATABASE_CONNECTION'],
  },
];
