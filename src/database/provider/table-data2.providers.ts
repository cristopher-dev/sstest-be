import { Connection } from 'typeorm';
import { TableData2 } from '../entities/table-data2.entity';

export const tableData2Providers = [
  {
    provide: 'TABLE_DATA2_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(TableData2),
    inject: ['DATABASE_CONNECTION'],
  },
];
