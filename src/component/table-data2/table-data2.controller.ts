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
  async create(@Body() createTableData2Dto: CreateTableData2Dto) {
    return await this.tableData2Service.create(createTableData2Dto);
  }

  @Get()
  async findAll() {
    return await this.tableData2Service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.tableData2Service.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTableData2Dto: UpdateTableData2Dto,
  ) {
    return await this.tableData2Service.update(+id, updateTableData2Dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.tableData2Service.remove(+id);
  }
}
