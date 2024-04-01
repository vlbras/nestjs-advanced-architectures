import { Transform } from 'class-transformer';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  public readonly email: string;
}
