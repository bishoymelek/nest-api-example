import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { UserQuestionnaireAnswerModule } from './user-questionnaire-answer/user-questionnaire-answer.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/nest', {
      autoCreate: true,
      autoIndex: true,
    }),
    PassportModule,
    AuthModule,
    UsersModule,
    QuestionnaireModule,
    UserQuestionnaireAnswerModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
