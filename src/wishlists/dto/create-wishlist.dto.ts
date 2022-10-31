import { IsOptional, IsUrl, Length } from 'class-validator';

export class CreateWishlistDto {
  @Length(1, 250)
  public name: string;

  @IsUrl()
  public image: string;

  @IsOptional()
  public itemsId: number[];
}
