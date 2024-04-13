import { Transform } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  public readonly email: string;

  @IsNotEmpty({ each: true })
  public readonly indicators: CreateIndicatorDto[];
}

export class CreateIndicatorDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  public readonly name: string;

  @IsInt()
  @Min(0)
  @Max(100)
  public readonly value: number;
}
