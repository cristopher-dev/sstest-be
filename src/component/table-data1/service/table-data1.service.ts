import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as moment from 'moment';

import { CreateTableData1Dto } from '../dto/create-table-data1.dto';
import { UpdateTableData1Dto } from '../dto/update-table-data1.dto';
import { ITableData1 } from '../interface/table-data1.interface';

@Injectable()
export class TableData1Service {
  constructor(
    @Inject('TABLE_DATA1_REPOSITORY')
    private tableData1Repository: Repository<any>,
  ) {}

  async create(createTableData1Dto: CreateTableData1Dto) {
    try {
      const data = await this.tableData1Repository.save(createTableData1Dto);
      return this.formatDate(null, data);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const data: ITableData1[] = await this.tableData1Repository.find();
      return this.formatDate(data);
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const data: ITableData1 = await this.tableData1Repository.findOne(id);
      if (!data) throw 'error';

      return this.formatDate(null, data);
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateTableData1Dto) {
    try {
      return await this.tableData1Repository.update(id, updateTableData1Dto);
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      return await this.tableData1Repository.delete(id);
    } catch (error) {
      return error.message;
    }
  }

  formatDate(dataArray: ITableData1[], dataObject?: ITableData1) {
    const format = 'YYYY-MM-DD';

    if (dataObject) {
      if (moment(dataObject.T1C4).isValid()) {
        dataObject.T1C4 = dataObject.T1C4 = moment(dataObject.T1C4).format(
          format,
        );
      }

      return dataObject;
    }

    if (dataArray) {
      dataArray.forEach((value) => {
        if (moment(value.T1C4).isValid()) {
          value.T1C4 = moment(value.T1C4).format(format);
        }
      });
      return dataArray;
    }

    return dataArray || dataObject;
  }
}
