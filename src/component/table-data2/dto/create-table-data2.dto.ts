import { IsNumber, IsNotEmpty, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTableData2Dto {
  @IsString()
  @IsNotEmpty()
  T2C1: string;

  @IsString()
  @IsNotEmpty()
  T2C2: string;

  @IsString()
  @IsNotEmpty()
  @Type((v): any => parseInt(v.object[v.property]))
  T2C3: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  T2C4: string;

  @IsString()
  @IsNotEmpty()
  @Type((v): any => parseInt(v.object[v.property]))
  T2C5: number;
}
