import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
// import { UpdateOfferDto } from './dto/update-offer.dto';
import { JwtGuard } from '../auth/jwt/jwt.guard';
import { Offer } from './entities/offer.entity';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @UseGuards(JwtGuard)
  @Post()
  public async create(@Req() req, @Body() createOfferDto: CreateOfferDto) {
    return this.offersService.create(req.user, createOfferDto);
  }

  @UseGuards(JwtGuard)
  @Get()
  public findAll() {
    return this.offersService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  public async findOne(@Param('id') id: number): Promise<Offer> {
    const offer = await this.offersService.findOne(id);
    if (!offer) {
      throw new NotFoundException('Такого взноса не существует.');
    }
    return offer;
  }
}
