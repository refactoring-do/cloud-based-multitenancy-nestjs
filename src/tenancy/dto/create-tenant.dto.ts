import { IsString } from 'class-validator';

export class CreateTenantDto {
  @IsString()
  readonly name: string;
}
