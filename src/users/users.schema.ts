import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum CountryList {
  Egypt = 'EGY',
}

@Schema()
export class User {
  @Prop({ unique: true, required: true, index: true })
  email: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  password: string;

  @Prop()
  dob: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  country: CountryList;
}

export const UserSchema = SchemaFactory.createForClass(User);
