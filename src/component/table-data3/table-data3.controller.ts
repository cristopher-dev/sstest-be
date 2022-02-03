import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TableData3Service } from './service/table-data3.service';
import { CreateTableData3Dto } from './dto/create-table-data3.dto';
import { UpdateTableData3Dto } from './dto/update-table-data3.dto';

@Controller('tabla-3')
export class TableData3Controller {
  constructor(private readonly tableData3Service: TableData3Service) {}

  @Post()
  async create(@Body() createTableData3Dto: CreateTableData3Dto) {
    return await this.tableData3Service.create(createTableData3Dto);
  }

  @Get()
  async findAll() {
    return await this.tableData3Service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.tableData3Service.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTableData3Dto: UpdateTableData3Dto,
  ) {
    return await this.tableData3Service.update(+id, updateTableData3Dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.tableData3Service.remove(+id);
  }
}
