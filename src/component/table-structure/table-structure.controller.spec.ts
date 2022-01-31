import { Test, TestingModule } from '@nestjs/testing';
import { TableStructureController } from './table-structure.controller';

describe('TableStructureController', () => {
  let controller: TableStructureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableStructureController],
    }).compile();

    controller = module.get<TableStructureController>(TableStructureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
