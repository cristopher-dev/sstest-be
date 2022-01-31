import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TableData2Service } from './service/table-data2.service';
import { CreateTableData2Dto } from './dto/create-table-data2.dto';
import { UpdateTableData2Dto } from './dto/update-table-data2.dto';

@Controller('table-data2')
export class TableData2Controller {
  constructor(private readonly tableData2Service: TableData2Service) {}

  @Post()
  create(@Body() createTableData2Dto: CreateTableData2Dto) {
    return this.tableData2Service.create(createTableData2Dto);
  }

  @Get()
  findAll() {
    return this.tableData2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tableData2Service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTableData2Dto: UpdateTableData2Dto,
  ) {
    return this.tableData2Service.update(+id, updateTableData2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableData2Service.remove(+id);
  }
}
