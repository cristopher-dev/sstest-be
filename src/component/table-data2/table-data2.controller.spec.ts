import { Test, TestingModule } from '@nestjs/testing';
import { TableData2Controller } from './table-data2.controller';
import { TableData2Service } from './service/table-data2.service';

describe('TableData2Controller', () => {
  let controller: TableData2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableData2Controller],
      providers: [TableData2Service],
    }).compile();

    controller = module.get<TableData2Controller>(TableData2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
