import { PartialType } from '@nestjs/mapped-types';
import { CreateTableData3Dto } from './create-table-data3.dto';

export class UpdateTableData3Dto extends PartialType(CreateTableData3Dto) {}
