import { Module } from '@nestjs/common';
import { TableData2Service } from './service/table-data2.service';
import { TableData2Controller } from './table-data2.controller';

@Module({
  controllers: [TableData2Controller],
  providers: [TableData2Service],
})
export class TableData2Module {}
