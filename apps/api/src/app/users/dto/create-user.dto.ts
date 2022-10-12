import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public userName: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public lastName: string;
}
