import { Module } from '@nestjs/common';

import { TableData1Module } from './table-data1/table-data1.module';
import { TableData2Module } from './table-data2/table-data2.module';
import { TableData3Module } from './table-data3/table-data3.module';

@Module({
  imports: [TableData1Module, TableData2Module, TableData3Module],
})
export class ComponentModule {}
