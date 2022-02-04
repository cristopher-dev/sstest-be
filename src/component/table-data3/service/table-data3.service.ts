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
    try {
      return await this.tableData3Repository.save(createTableData3Dto);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.tableData3Repository.find();
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      return await this.tableData3Repository.findOne(id);
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateTableData3Dto) {
    try {
      return await this.tableData3Repository.update(id, updateTableData3Dto);
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      return await this.tableData3Repository.delete(id);
    } catch (error) {
      return error.message;
    }
  }
}
