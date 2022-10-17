import { CommonEntityFields } from '../../utils/CommonEntityFields';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import {
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  MaxLength,
} from 'class-validator';
import { Wish } from '../../wishes/entities/wish.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Wishlist extends CommonEntityFields {
  @Column()
  @IsNotEmpty()
  @Length(1, 250)
  public name: string;

  @Column()
  @IsOptional()
  @MaxLength(1500)
  public description: string;

  @Column({ default: 'https://i.pravatar.cc' })
  @IsNotEmpty()
  @IsUrl()
  public image: string;

  @ManyToMany(() => Wish)
  @JoinTable()
  items: Wish[];

  @ManyToOne(() => User, (user) => user.wishlists)
  public owner: User;
}
