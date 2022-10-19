import { Injectable } from '@nestjs/common';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { Wish } from '../wishes/entities/wish.entity';
import { User } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WishesService {
  constructor(
    @InjectRepository(Wish)
    private readonly wishesRepository: Repository<Wish>,
  ) {}

  public async create(user: User, createWishDto: CreateWishDto) {
    const wish = await this.wishesRepository.save({
      ...createWishDto,
      owner: user,
    });
    return wish;
  }

  // findWishById(id: number) {
  //   return `This action returns a #${id} wish`;
  // }

  findWishesByOwner(ownerId: number): Promise<Wish[]> {
    return this.wishesRepository.find({
      where: { owner: { id: ownerId } },
      relations: ['offers', 'owner'],
    });
  }

  // updateWish(id: number, updateWishDto: UpdateWishDto) {
  //   return `This action updates a #${id} wish`;
  // }

  // removeWish(id: number) {
  //   return `This action removes a #${id} wish`;
  // }

  // async findTopWishes(): Promise<Wish[]> {
  //   return "take: 20, copied"
  // }

  // async findLastWishes(): Promise<Wish[]> {
  //   return "take: 40, createdAt"
  // }
}
