import { PartialType } from '@nestjs/mapped-types';
import { CreateTableData3Dto } from './create-table-data3.dto';
import { IsNumber, IsNotEmpty, IsString, IsDate } from 'class-validator';

export class UpdateTableData3Dto extends PartialType(CreateTableData3Dto) {
  @IsNumber()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  T3C1: number;

  @IsString()
  @IsNotEmpty()
  T3C2: string;

  @IsDate()
  @IsNotEmpty()
  T3C3: string;
}
