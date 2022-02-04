import { IsNumber, IsNotEmpty, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTableData3Dto {
  @IsNumber()
  @IsNotEmpty()
  T3C1: number;

  @IsString()
  @IsNotEmpty()
  T3C2: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  T3C3: string;
}
