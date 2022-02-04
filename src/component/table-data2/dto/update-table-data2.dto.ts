import { PartialType } from '@nestjs/mapped-types';
import { CreateTableData2Dto } from './create-table-data2.dto';
import { IsNumber, IsNotEmpty, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateTableData2Dto extends PartialType(CreateTableData2Dto) {
  @IsString()
  @IsNotEmpty()
  T2C1: string;

  @IsString()
  @IsNotEmpty()
  T2C2: string;

  @IsNumber()
  @IsNotEmpty()
  T2C3: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  T2C4: string;

  @IsNumber()
  @IsNotEmpty()
  T2C5: number;
}
