import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserQuestionnaireAnswerDto } from './dto/create-user-questionnaire-answer.dto';
import { UpdateUserQuestionnaireAnswerDto } from './dto/update-user-questionnaire-answer.dto';
import {
  UserQuestionnaireAnswer,
  UserQuestionnaireAnswerDocument,
} from './entities/user-questionnaire-answer.entity';

@Injectable()
export class UserQuestionnaireAnswerService {
  constructor(
    @InjectModel(UserQuestionnaireAnswer.name)
    private questionnaireModel: Model<UserQuestionnaireAnswerDocument>,
  ) {}

  create(createUserQuestionnaireAnswerDto: CreateUserQuestionnaireAnswerDto) {
    const createdDoc = new this.questionnaireModel(
      createUserQuestionnaireAnswerDto,
    );

    return createdDoc.save();
  }

  async findAllByUserId(userId) {
    const foundList = await this.questionnaireModel
      .findOne({ userId })
      .populate('answers.qId', 'question');

    return foundList;
  }

  findOne(id: number) {
    return `This action returns a #${id} userQuestionnaireAnswer`;
  }

  update(
    id: number,
    updateUserQuestionnaireAnswerDto: UpdateUserQuestionnaireAnswerDto,
  ) {
    return `This action updates a #${id} userQuestionnaireAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} userQuestionnaireAnswer`;
  }
}
