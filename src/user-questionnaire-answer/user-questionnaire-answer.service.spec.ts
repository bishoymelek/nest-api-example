import { Test, TestingModule } from '@nestjs/testing';
import { UserQuestionnaireAnswerService } from './user-questionnaire-answer.service';

describe('UserQuestionnaireAnswerService', () => {
  let service: UserQuestionnaireAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserQuestionnaireAnswerService],
    }).compile();

    service = module.get<UserQuestionnaireAnswerService>(UserQuestionnaireAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
