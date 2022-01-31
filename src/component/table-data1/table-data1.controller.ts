import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TableData1Service } from './service/table-data1.service';
import { CreateTableData1Dto } from './dto/create-table-data1.dto';
import { UpdateTableData1Dto } from './dto/update-table-data1.dto';

@Controller('table-data1')
export class TableData1Controller {
  constructor(private readonly tableData1Service: TableData1Service) {}

  @Post()
  create(@Body() createTableData1Dto: CreateTableData1Dto) {
    return this.tableData1Service.create(createTableData1Dto);
  }

  @Get()
  findAll() {
    return this.tableData1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tableData1Service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTableData1Dto: UpdateTableData1Dto,
  ) {
    return this.tableData1Service.update(+id, updateTableData1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableData1Service.remove(+id);
  }
}
