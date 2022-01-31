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

  create(createTableData3Dto: CreateTableData3Dto) {
    return 'This action adds a new tableData3';
  }

  findAll() {
    return `This action returns all tableData3`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tableData3`;
  }

  update(id: number, updateTableData3Dto: UpdateTableData3Dto) {
    return `This action updates a #${id} tableData3`;
  }

  remove(id: number) {
    return `This action removes a #${id} tableData3`;
  }
}
