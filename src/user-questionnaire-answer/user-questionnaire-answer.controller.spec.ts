import { Test, TestingModule } from '@nestjs/testing';
import { UserQuestionnaireAnswerController } from './user-questionnaire-answer.controller';
import { UserQuestionnaireAnswerService } from './user-questionnaire-answer.service';

describe('UserQuestionnaireAnswerController', () => {
  let controller: UserQuestionnaireAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserQuestionnaireAnswerController],
      providers: [UserQuestionnaireAnswerService],
    }).compile();

    controller = module.get<UserQuestionnaireAnswerController>(UserQuestionnaireAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
