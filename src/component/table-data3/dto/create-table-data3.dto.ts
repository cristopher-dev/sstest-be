import { IsNumber, IsNotEmpty, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTableData3Dto {
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
