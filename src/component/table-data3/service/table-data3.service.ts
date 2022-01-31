import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateTableData3Dto } from '../dto/create-table-data3.dto';
import { UpdateTableData3Dto } from '../dto/update-table-data3.dto';

@Injectable()
export class TableData3Service {
  constructor(
    @Inject('TABLE_DATA3_REPOSITORY')
    private tableData3Repository: Repository<any>,
  ) {}

  async create(createTableData3Dto: CreateTableData3Dto) {
    return await this.tableData3Repository.save(createTableData3Dto);
  }

  async findAll() {
    return await this.tableData3Repository.find();
  }

  async findOne(id: number) {
    return await this.tableData3Repository.findOne(id);
  }

  async update(id: number, updateTableData3Dto: UpdateTableData3Dto) {
    return await this.tableData3Repository.update(id, updateTableData3Dto);
  }

  async remove(id: number) {
    return await this.tableData3Repository.delete(id);
  }
}
