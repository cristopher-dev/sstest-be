import { IsNumber, IsNotEmpty, IsString, IsDate } from 'class-validator';
export class CreateTableData3Dto {
  @IsNumber()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  T3C1: number;

  @IsString()
  @IsNotEmpty()
  T3C2: string;

  @IsDate()
  @IsNotEmpty()
  T3C3: string;
}
