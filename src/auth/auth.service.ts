import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.schema';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async login(credentials: any) {
    const user = await this.usersService.findOneByEmail(credentials.email);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await this.comparePasswords(
      user.password,
      credentials.password,
    );

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const { firstName, lastName, email, dob, address, city, country } = user;

    // generate and sign token
    const token = await this._createToken({
      email,
      firstName,
      lastName,
      dob,
      address,
      city,
      country,
    });

    return { firstName, lastName, email, address, city, country, ...token };
  }

  async register(createUserDto: CreateUserDto): Promise<User> | null {
    return await this.usersService.create(createUserDto);
  }

  private async _createToken(user: any) {
    const accessToken = await this.jwtService.sign(user);

    return {
      expiresIn: '1d',
      accessToken,
    };
  }

  async comparePasswords(userPassword, currentPassword) {
    return await compare(currentPassword, userPassword);
  }
}
