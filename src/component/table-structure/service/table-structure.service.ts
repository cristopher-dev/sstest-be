import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class TableStructureService {
  constructor(
    @Inject('TABLE_TYPE_REPOSITORY')
    private tableType: Repository<any>,

    @Inject('TABLE_STRUCTURE_REPOSITORY')
    private tableStructure: Repository<any>,
  ) {}

  async getTables() {
    return await this.tableType.find();
  }

  async getTableDetail() {
    return await this.tableStructure.find();
  }
}
