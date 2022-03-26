import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { CountryList } from '../users.schema';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  // @IsDate()
  @IsNotEmpty()
  dob: string;

  @IsNotEmpty()
  address: Date;

  @IsNotEmpty()
  city: string;

  @IsEnum(CountryList)
  @IsNotEmpty()
  country: CountryList;
}
