import { Test, TestingModule } from '@nestjs/testing';
import { TableData3Service } from './table-data3.service';

describe('TableData3Service', () => {
  let service: TableData3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableData3Service],
    }).compile();

    service = module.get<TableData3Service>(TableData3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
