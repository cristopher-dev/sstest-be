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

@Controller('tabla-1')
export class TableData1Controller {
  constructor(private readonly tableData1Service: TableData1Service) {}

  @Post()
  async create(@Body() createTableData1Dto: CreateTableData1Dto) {
    return await this.tableData1Service.create(createTableData1Dto);
  }

  @Get()
  async findAll() {
    return await this.tableData1Service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.tableData1Service.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTableData1Dto: UpdateTableData1Dto,
  ) {
    return await this.tableData1Service.update(+id, updateTableData1Dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.tableData1Service.remove(+id);
  }
}
