import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import {
  Questionnaire,
  QuestionnaireDocument,
} from './entities/questionnaire.entity';

@Injectable()
export class QuestionnaireService {
  constructor(
    @InjectModel(Questionnaire.name)
    private questionnaireModel: Model<QuestionnaireDocument>,
  ) {}

  async create(createQuestionnaireDto: CreateQuestionnaireDto) {
    const createdDoc = new this.questionnaireModel(createQuestionnaireDto);

    return createdDoc.save();
  }

  async findAll() {
    const foundList = await this.questionnaireModel
      .find()
      .sort({ qLocation: 'asc' });

    return foundList;
  }

  findOne(id: number) {
    return `This action returns a #${id} questionnaire`;
  }

  update(id: number, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    return `This action updates a #${id} questionnaire`;
  }

  remove(id: number) {
    return `This action removes a #${id} questionnaire`;
  }
}
