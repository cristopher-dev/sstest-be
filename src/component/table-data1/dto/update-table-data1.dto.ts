import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsDate,
  IsOptional,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateTableData1Dto } from './create-table-data1.dto';
import { ITableData1 } from '../interface/table-data1.interface';
import { Type } from 'class-transformer';

export class UpdateTableData1Dto
  extends PartialType(CreateTableData1Dto)
  implements ITableData1
{
  @IsNumber()
  @IsNotEmpty()
  T1C1: number;

  @IsNotEmpty()
  @IsString()
  T1C2: string;

  @IsNumber()
  @IsOptional()
  T1C3: number;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  T1C4: string;
}
