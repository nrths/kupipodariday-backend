import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOfferDto {
  @IsNotEmpty()
  public amount: number;

  @IsOptional()
  public hidden: boolean;

  @IsNotEmpty()
  public itemId: number;
}
