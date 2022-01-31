import { Module } from '@nestjs/common';
import { databaseConfigProviders } from './config.providers';
import { tableData1Providers } from './provider/table-data1.providers';
import { tableData2Providers } from './provider/table-data2.providers';
import { tableData3Providers } from './provider/table-data3.providers';
import { tableStructureProviders } from './provider/table-structure.providers';
import { tableTypeProviders } from './provider/table-type.providers';

@Module({
  providers: [
    ...databaseConfigProviders,
    ...tableData1Providers,
    ...tableData2Providers,
    ...tableData3Providers,
    ...tableStructureProviders,
    ...tableTypeProviders,
  ],
  exports: [
    ...databaseConfigProviders,
    ...tableData1Providers,
    ...tableData2Providers,
    ...tableData3Providers,
    ...tableStructureProviders,
    ...tableTypeProviders,
  ],
})
export class DatabaseModule {}
