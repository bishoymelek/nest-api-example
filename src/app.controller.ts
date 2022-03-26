import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Body,
  HttpException,
} from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { serviceErrorHandler } from './utilities/db-error-handlers';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('auth/register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.authService.register(createUserDto);
      return user;
    } catch (error) {
      const { status, message } = serviceErrorHandler(error);
      throw new HttpException(message || 'Conflict', status);
    }
  }

  @Post('auth/login')
  async login(@Body() credentials) {
    return this.authService.login(credentials);
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
