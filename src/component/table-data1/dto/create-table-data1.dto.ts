import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsDate,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

import { ITableData1 } from '../interface/table-data1.interface';

export class CreateTableData1Dto implements ITableData1 {
  @IsString()
  @IsNotEmpty()
  @Type((v): any => parseInt(v.object[v.property]))
  T1C1: number;

  @IsNotEmpty()
  @IsString()
  T1C2: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Type((v): any => parseInt(v.object[v.property]))
  T1C3: number;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @IsNotEmpty()
  T1C4: string;
}
