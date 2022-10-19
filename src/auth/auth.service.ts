import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  public login(user: User): { access_token: string } {
    const payload = { sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

  public async validate(username: string, password: string) {
    const user = await this.usersService.findOneByUsername(username);

    const passwordMatched = await bcrypt.compare(password, user.password);
    if (user && passwordMatched) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
