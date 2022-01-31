import { Connection } from 'typeorm';
import { TableType } from '../entities/table-type.entity';

export const tableTypeProviders = [
  {
    provide: 'TABLE_TYPE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(TableType),
    inject: ['DATABASE_CONNECTION'],
  },
];
