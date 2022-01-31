import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { TableStructureController } from './table-structure.controller';
import { TableStructureService } from './service/table-structure.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TableStructureController],
  providers: [TableStructureService],
})
export class TableStructureModule {}
