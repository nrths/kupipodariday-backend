import { IsNotEmpty, IsOptional, IsUrl, Length } from 'class-validator';

export class CreateWishlistDto {
  @IsNotEmpty()
  @Length(1, 250)
  public name: string;

  @IsNotEmpty()
  @IsUrl()
  public image: string;

  @IsOptional()
  public itemsId: number[];
}
