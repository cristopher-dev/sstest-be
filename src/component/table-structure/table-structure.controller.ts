import { Controller, Get } from '@nestjs/common';

@Controller('table-structure')
export class TableStructureController {
  @Get()
  getTables() {}

  @Get('detail')
  getTableDetail() {}
}
