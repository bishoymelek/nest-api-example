import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserQuestionnaireAnswerService } from './user-questionnaire-answer.service';
import { UserQuestionnaireAnswerController } from './user-questionnaire-answer.controller';
import {
  UserQuestionnaireAnswer,
  UserQuestionnaireAnswerSchema,
} from './entities/user-questionnaire-answer.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserQuestionnaireAnswer.name,
        schema: UserQuestionnaireAnswerSchema,
      },
    ]),
  ],
  controllers: [UserQuestionnaireAnswerController],
  providers: [UserQuestionnaireAnswerService],
})
export class UserQuestionnaireAnswerModule {}
