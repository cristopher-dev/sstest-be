import { Module } from '@nestjs/common';
import { TableStructureController } from './table-structure.controller';
import { TableStructureService } from './service/table-structure.service';

@Module({
  controllers: [TableStructureController],
  providers: [TableStructureService],
})
export class TableStructureModule {}
