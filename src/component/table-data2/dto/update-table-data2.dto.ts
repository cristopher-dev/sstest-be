import { PartialType } from '@nestjs/mapped-types';
import { CreateTableData2Dto } from './create-table-data2.dto';
import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsDate,
  IsOptional,
} from 'class-validator';

export class UpdateTableData2Dto extends PartialType(CreateTableData2Dto) {
  @IsNumber()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  T2C1: number;

  @IsString()
  T2C2: string;

  @IsNumber()
  T2C3: number;

  @IsDate()
  @IsNotEmpty()
  T2C4: string;

  @IsNumber()
  @IsNotEmpty()
  T2C5: number;
}
