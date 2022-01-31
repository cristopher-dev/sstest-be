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

  create(createTableData2Dto: CreateTableData2Dto) {
    return 'This action adds a new tableData2';
  }

  findAll() {
    return `This action returns all tableData2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tableData2`;
  }

  update(id: number, updateTableData2Dto: UpdateTableData2Dto) {
    return `This action updates a #${id} tableData2`;
  }

  remove(id: number) {
    return `This action removes a #${id} tableData2`;
  }
}
