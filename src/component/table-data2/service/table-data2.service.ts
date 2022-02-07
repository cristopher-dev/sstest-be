import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as moment from 'moment';

import { CreateTableData2Dto } from '../dto/create-table-data2.dto';
import { UpdateTableData2Dto } from '../dto/update-table-data2.dto';
import { ITableData2 } from '../interface/table-data2.interface';

@Injectable()
export class TableData2Service {
  constructor(
    @Inject('TABLE_DATA2_REPOSITORY')
    private tableData2Repository: Repository<any>,
  ) {}

  async create(createTableData2Dto: CreateTableData2Dto) {
    try {
      const data = await this.tableData2Repository.save(createTableData2Dto);
      return this.formatDate(null, data);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const data: ITableData2[] = await this.tableData2Repository.find();
      return this.formatDate(data);
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const data: ITableData2 = await this.tableData2Repository.findOne(id);
      return this.formatDate(null, data);
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateTableData2Dto) {
    try {
      return await this.tableData2Repository.update(id, updateTableData2Dto);
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      return await this.tableData2Repository.delete(id);
    } catch (error) {
      return error.message;
    }
  }

  formatDate(dataArray: ITableData2[], dataObject?: ITableData2) {
    const format = 'YYYY-DD-MM HH:mm:ss';

    if (dataObject) {
      if (moment(dataObject.T2C4).isValid()) {
        dataObject.T2C4 = moment(dataObject.T2C4).format(format);
      }

      return dataObject;
    }

    if (dataArray) {
      dataArray.forEach((value) => {
        if (moment(value.T2C4).isValid()) {
          value.T2C4 = moment(value.T2C4).format(format);
        }
      });
      return dataArray;
    }

    return dataArray || dataObject;
  }
}
