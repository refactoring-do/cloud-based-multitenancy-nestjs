import { Exclude, Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';

@Exclude()
export class ReadUserDto {
  @IsNumber()
  @Expose()
  readonly id: number;

  @IsNumber()
  @Expose()
  readonly name: string;
}
