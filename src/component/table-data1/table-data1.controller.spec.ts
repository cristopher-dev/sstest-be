import { Test, TestingModule } from '@nestjs/testing';
import { TableData1Controller } from './table-data1.controller';
import { TableData1Service } from './service/table-data1.service';

describe('TableData1Controller', () => {
  let controller: TableData1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableData1Controller],
      providers: [TableData1Service],
    }).compile();

    controller = module.get<TableData1Controller>(TableData1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
