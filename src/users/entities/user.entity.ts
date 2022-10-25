import {
  IsEmail,
  IsNotEmpty,
  IsEmpty,
  IsOptional,
  IsUrl,
  Length,
  MinLength,
} from 'class-validator';
import { CommonEntityFields } from '../../utils/CommonEntityFields';
import { Entity, Column, OneToMany } from 'typeorm';
import { Wish } from '../../wishes/entities/wish.entity';
import { Wishlist } from '../../wishlists/entities/wishlist.entity';
import { Offer } from '../../offers/entities/offer.entity';

@Entity()
export class User extends CommonEntityFields {
  @Column({ unique: true })
  @IsNotEmpty()
  @Length(2, 30)
  public username: string;

  @Column({ default: 'Пока ничего не рассказал о себе' })
  @IsOptional()
  @Length(2, 200)
  public about: string;

  @Column({ default: 'https://i.pravatar.cc/300' })
  @IsUrl()
  public avatar: string;

  @Column({ unique: true, select: false })
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsNotEmpty()
  @MinLength(6)
  @Column({ select: false })
  public password: string;

  @OneToMany(() => Wish, (wish) => wish.owner)
  @IsEmpty()
  public wishes: Wish[];

  @OneToMany(() => Offer, (offer) => offer.user)
  @IsEmpty()
  public offers: Offer[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.owner)
  @IsEmpty()
  public wishlists: Wishlist[];
}
