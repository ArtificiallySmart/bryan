import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePlantDto {
  @IsString()
  @IsNotEmpty()
  public id!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public commonName?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public scientificName?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public imageUrl?: string;
}
