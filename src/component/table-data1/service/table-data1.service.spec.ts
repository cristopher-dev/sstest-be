import { Test, TestingModule } from '@nestjs/testing';
import { TableData1Service } from './table-data1.service';

describe('TableData1Service', () => {
  let service: TableData1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableData1Service],
    }).compile();

    service = module.get<TableData1Service>(TableData1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
