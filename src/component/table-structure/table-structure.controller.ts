import { Body, Controller, Get, Post } from '@nestjs/common';
import { TableStructureService } from './service/table-structure.service';

@Controller('table-structure')
export class TableStructureController {
  constructor(private readonly tableStructureService: TableStructureService) {}

  @Get()
  async getTables() {
    return await this.tableStructureService.getTables();
  }

  @Get('detail')
  async getTableDetail() {
    return await this.tableStructureService.getTableDetail();
  }
}
