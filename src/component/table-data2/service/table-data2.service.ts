import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateTableData2Dto } from '../dto/create-table-data2.dto';
import { UpdateTableData2Dto } from '../dto/update-table-data2.dto';

@Injectable()
export class TableData2Service {
  constructor(
    @Inject('TABLE_DATA2_REPOSITORY')
    private tableData2Repository: Repository<any>,
  ) {}

  async create(createTableData2Dto: CreateTableData2Dto) {
    return await this.tableData2Repository.save(createTableData2Dto);
  }

  async findAll() {
    return await this.tableData2Repository.find();
  }

  async findOne(id: number) {
    return await this.tableData2Repository.findOne(id);
  }

  async update(id: number, updateTableData2Dto: UpdateTableData2Dto) {
    return await this.tableData2Repository.update(id, updateTableData2Dto);
  }

  async remove(id: number) {
    return await this.tableData2Repository.delete(id);
  }
}
