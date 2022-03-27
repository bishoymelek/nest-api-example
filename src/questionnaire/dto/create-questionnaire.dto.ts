import { IsNotEmpty } from 'class-validator';

export class CreateQuestionnaireDto {
  @IsNotEmpty()
  question: string;

  @IsNotEmpty()
  qLocation: string;
}
