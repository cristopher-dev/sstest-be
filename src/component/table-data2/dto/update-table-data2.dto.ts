import { PartialType } from '@nestjs/mapped-types';
import { CreateTableData2Dto } from './create-table-data2.dto';

export class UpdateTableData2Dto extends PartialType(CreateTableData2Dto) {}
