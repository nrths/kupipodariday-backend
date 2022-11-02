import { CommonEntityFields } from '../../utils/CommonEntityFields';
import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Wish } from '../../wishes/entities/wish.entity';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Offer extends CommonEntityFields {
  @ManyToOne(() => User, (user) => user.offers)
  @IsNotEmpty()
  public user: User;

  @ManyToOne(() => Wish, (wish) => wish.offers)
  @IsNotEmpty()
  public item: Wish;

  @Column({ scale: 2, default: 0 })
  @IsNotEmpty()
  public amount: number;

  @Column({ default: false })
  public hidden: boolean;
}
