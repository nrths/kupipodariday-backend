import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Wishlist } from './entities/wishlist.entity';
import { User } from '../users/entities/user.entity';
import { WishesService } from '../wishes/wishes.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
// import { Wish } from '../wishes/entities/wish.entity';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(Wishlist)
    private readonly wishlistsRepository: Repository<Wishlist>,
    private readonly wishesService: WishesService,
  ) {}

  public async create(user: User, createWishlistDto: CreateWishlistDto) {
    const wishes = await this.wishesService.findMany({
      where: { id: In(createWishlistDto.itemsId || []) },
    });
    const wishlist = this.wishlistsRepository.create({
      ...createWishlistDto,
      owner: user,
      items: wishes,
    });
    return this.wishlistsRepository.save(wishlist);
  }

  public async findAll(): Promise<Wishlist[]> {
    return this.wishlistsRepository.find({ relations: ['items', 'owner'] });
  }

  public async findById(id: number): Promise<Wishlist> {
    return this.wishlistsRepository.findOne({
      where: { id },
      relations: ['items', 'owner'],
    });
  }

  public async update(
    id: number,
    updateWishlistDto: UpdateWishlistDto,
  ): Promise<any> {
    return await this.wishlistsRepository.update(id, updateWishlistDto);
  }

  public async remove(id: number) {
    return this.wishlistsRepository.delete(id);
  }
}
