import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  HttpException,
} from '@nestjs/common';
import { UserQuestionnaireAnswerService } from './user-questionnaire-answer.service';
import { CreateUserQuestionnaireAnswerDto } from './dto/create-user-questionnaire-answer.dto';
import { UpdateUserQuestionnaireAnswerDto } from './dto/update-user-questionnaire-answer.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { serviceErrorHandler } from 'src/utilities/db-error-handlers';

@UseGuards(JwtAuthGuard)
@Controller('user-questionnaire-answer')
export class UserQuestionnaireAnswerController {
  constructor(
    private readonly userQuestionnaireAnswerService: UserQuestionnaireAnswerService,
  ) {}

  @Post()
  async create(
    @Body() createUserQuestionnaireAnswerDto: CreateUserQuestionnaireAnswerDto,
    @Request() req,
  ) {
    try {
      return await this.userQuestionnaireAnswerService.create({
        ...createUserQuestionnaireAnswerDto,
        userId: req.user._id,
      });
    } catch (error) {
      const { status, message } = serviceErrorHandler(error);
      throw new HttpException(message || 'Conflict', status);
    }
  }

  @Get()
  async findAll(@Request() req) {
    try {
      return await this.userQuestionnaireAnswerService.findAllByUserId(
        req.user._id,
      );
    } catch (error) {
      const { status, message } = serviceErrorHandler(error);
      throw new HttpException(message || 'Conflict', status);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userQuestionnaireAnswerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserQuestionnaireAnswerDto: UpdateUserQuestionnaireAnswerDto,
  ) {
    return this.userQuestionnaireAnswerService.update(
      +id,
      updateUserQuestionnaireAnswerDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userQuestionnaireAnswerService.remove(+id);
  }
}
