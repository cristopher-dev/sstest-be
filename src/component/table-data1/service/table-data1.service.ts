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
    try {
      return await this.tableData1Repository.save(createTableData1Dto);
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      return await this.tableData1Repository.find();
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      return await this.tableData1Repository.findOne(id);
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateTableData1Dto: UpdateTableData1Dto) {
    try {
      return await this.tableData1Repository.update(id, updateTableData1Dto);
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      return await this.tableData1Repository.delete(id);
    } catch (error) {
      return error.message;
    }
  }
}
