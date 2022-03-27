import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionnaireDocument = Questionnaire & Document;

@Schema()
export class Questionnaire {
  @Prop({ index: true, required: true })
  question: string;

  @Prop({ required: true, unique: true })
  qLocation: number;
}

export const QuestionnaireSchema = SchemaFactory.createForClass(Questionnaire);
