import { Module } from '@nestjs/common';
import { TableData1Service } from './service/table-data1.service';
import { TableData1Controller } from './table-data1.controller';

@Module({
  controllers: [TableData1Controller],
  providers: [TableData1Service],
})
export class TableData1Module {}
