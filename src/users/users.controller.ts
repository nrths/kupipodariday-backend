import { Controller, Get, Param, Delete, Req } from '@nestjs/common'; // Post, Body, Patch
import { UsersService } from './users.service';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getMyProfile(@Req() req) {
    return this.usersService.findOne(req.user.id);
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.usersService.findOneByUsername(username);
  }

  // @Patch('me')
  // async update(@Req() req, @Body() updateUserDto: UpdateUserDto): Promise<User> {
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
