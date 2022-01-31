import { Connection } from 'typeorm';
import { TableStructure } from '../entities/table-structure.entity';

export const tableStructureProviders = [
  {
    provide: 'TABLE_STRUCTURE_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(TableStructure),
    inject: ['DATABASE_CONNECTION'],
  },
];
