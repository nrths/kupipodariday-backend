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
  name: string;

  @Column({ nullable: true })
  @IsOptional()
  @MaxLength(1500)
  description: string;

  @Column({ default: 'https://i.pravatar.cc' })
  @IsOptional()
  @IsUrl()
  image: string;

  @ManyToOne(() => User, (user) => user.wishlists)
  owner: User;

  @ManyToMany(() => Wish)
  @JoinTable()
  @IsOptional()
  items: Wish[];

  itemsId: number[];
}
