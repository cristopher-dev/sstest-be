import { PartialType } from '@nestjs/mapped-types';
import { CreateTableData3Dto } from './create-table-data3.dto';
import { IsNumber, IsNotEmpty, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateTableData3Dto extends PartialType(CreateTableData3Dto) {
  @IsString()
  @IsNotEmpty()
  @Type((v): any => parseInt(v.object[v.property]))
  T3C1: number;

  @IsString()
  @IsNotEmpty()
  T3C2: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  T3C3: string;
}
