import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Wish } from './entities/wish.entity';
import { WishesService } from './wishes.service';
import { CreateWishDto } from './dto/create-wish.dto';
// import { UpdateWishDto } from './dto/update-wish.dto';
import { JwtGuard } from '../auth/jwt/jwt.guard';

@Controller('wishes')
export class WishesController {
  constructor(private readonly wishesService: WishesService) {}

  @UseGuards(JwtGuard)
  @Post()
  public create(
    @Req() req,
    @Body() createWishDto: CreateWishDto,
  ): Promise<Wish> {
    return this.wishesService.create(req.user, createWishDto);
  }
}
