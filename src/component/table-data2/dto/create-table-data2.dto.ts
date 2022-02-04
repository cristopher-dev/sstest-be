import { IsNumber, IsNotEmpty, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTableData2Dto {
  @IsNumber()
  @IsNotEmpty()
  T2C1: number;

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
