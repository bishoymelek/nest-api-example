import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/users.schema';

export type UserQuestionnaireAnswerDocument = UserQuestionnaireAnswer &
  Document;

export interface QuestionAnswer {
  qId: object;
  answer: string;
  qLocation: number;
}

@Schema()
export class UserQuestionnaireAnswer {
  @Prop(
    raw([
      {
        qId: {
          type: Types.ObjectId,
          ref: 'Questionnaire',
          index: true,
          required: true,
        },
        answer: { type: String },
        qLocation: { type: Number },
      },
    ]),
  )
  answers: QuestionAnswer[];

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    index: true,
    required: true,
    unique: true,
  })
  userId: User;
}

export const UserQuestionnaireAnswerSchema = SchemaFactory.createForClass(
  UserQuestionnaireAnswer,
);
