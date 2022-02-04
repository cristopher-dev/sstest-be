import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsDate,
  IsOptional,
} from 'class-validator';
export class CreateTableData2Dto {
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
