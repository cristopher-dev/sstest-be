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

  create(createTableData1Dto: CreateTableData1Dto) {
    return 'This action adds a new tableData1';
  }

  findAll() {
    return `This action returns all tableData1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tableData1`;
  }

  update(id: number, updateTableData1Dto: UpdateTableData1Dto) {
    return `This action updates a #${id} tableData1`;
  }

  remove(id: number) {
    return `This action removes a #${id} tableData1`;
  }
}
