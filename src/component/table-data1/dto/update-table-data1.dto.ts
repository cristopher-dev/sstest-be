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

export class UpdateTableData1Dto
  extends PartialType(CreateTableData1Dto)
  implements ITableData1
{
  @IsNumber()
  id: number;

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
  @IsOptional()
  T1C4: string;
}
