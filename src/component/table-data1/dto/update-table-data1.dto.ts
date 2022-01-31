import { PartialType } from '@nestjs/mapped-types';
import { CreateTableData1Dto } from './create-table-data1.dto';

export class UpdateTableData1Dto extends PartialType(CreateTableData1Dto) {}
