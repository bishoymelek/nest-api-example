import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireController } from './questionnaire.controller';
import {
  QuestionnaireSchema,
  Questionnaire,
} from './entities/questionnaire.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Questionnaire.name,
        schema: QuestionnaireSchema,
      },
    ]),
  ],
  controllers: [QuestionnaireController],
  providers: [QuestionnaireService],
})
export class QuestionnaireModule {}
