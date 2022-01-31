import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateTableData1Dto } from '../dto/create-table-data1.dto';
import { UpdateTableData1Dto } from '../dto/update-table-data1.dto';

@Injectable()
export class TableData1Service {
  constructor(
    @Inject('TABLE_DATA1_REPOSITORY')
    private tableData1Repository: Repository<any>,
  ) {}

  async create(createTableData1Dto: CreateTableData1Dto) {
    return await this.tableData1Repository.save(createTableData1Dto);
  }

  async findAll() {
    return await this.tableData1Repository.find();
  }

  async findOne(id: number) {
    return await this.tableData1Repository.findOne(id);
  }

  async update(id: number, updateTableData1Dto: UpdateTableData1Dto) {
    return await this.tableData1Repository.update(id, updateTableData1Dto);
  }

  async remove(id: number) {
    return await this.tableData1Repository.delete(id);
  }
}
