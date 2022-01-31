import { Test, TestingModule } from '@nestjs/testing';
import { TableData3Controller } from './table-data3.controller';
import { TableData3Service } from './service/table-data3.service';

describe('TableData3Controller', () => {
  let controller: TableData3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableData3Controller],
      providers: [TableData3Service],
    }).compile();

    controller = module.get<TableData3Controller>(TableData3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
