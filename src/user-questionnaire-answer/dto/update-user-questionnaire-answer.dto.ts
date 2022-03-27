import { PartialType } from '@nestjs/swagger';
import { CreateUserQuestionnaireAnswerDto } from './create-user-questionnaire-answer.dto';

export class UpdateUserQuestionnaireAnswerDto extends PartialType(CreateUserQuestionnaireAnswerDto) {}
