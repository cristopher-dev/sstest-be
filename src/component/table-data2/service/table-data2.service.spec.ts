import { Test, TestingModule } from '@nestjs/testing';
import { TableData2Service } from './table-data2.service';

describe('TableData2Service', () => {
  let service: TableData2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableData2Service],
    }).compile();

    service = module.get<TableData2Service>(TableData2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
