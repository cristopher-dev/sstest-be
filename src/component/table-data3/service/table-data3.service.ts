import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as moment from 'moment';

import { CreateTableData3Dto } from '../dto/create-table-data3.dto';
import { UpdateTableData3Dto } from '../dto/update-table-data3.dto';
import { ITableData3 } from '../interface/table-data3.interface';

@Injectable()
export class TableData3Service {
  constructor(
    @Inject('TABLE_DATA3_REPOSITORY')
    private tableData3Repository: Repository<any>,
  ) {}

  async create(createTableData3Dto: CreateTableData3Dto) {
    try {
      const data = await this.tableData3Repository.save(createTableData3Dto);
      return this.formatDate(null, data);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const data: ITableData3[] = await this.tableData3Repository.find();
      return this.formatDate(data);
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const data: ITableData3 = await this.tableData3Repository.findOne(id);
      return this.formatDate(null, data);
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

  formatDate(dataArray: ITableData3[], dataObject?: ITableData3) {
    const format = 'HH:mm:ss';

    if (dataObject) {
      if (moment(dataObject.T3C3).isValid()) {
        dataObject.T3C3 = dataObject.T3C3 = moment(dataObject.T3C3).format(
          format,
        );
      }

      return dataObject;
    }

    if (dataArray) {
      dataArray.forEach((value) => {
        if (moment(value.T3C3).isValid()) {
          value.T3C3 = moment(value.T3C3).format(format);
        }
      });
      return dataArray;
    }

    return dataArray || dataObject;
  }
}
