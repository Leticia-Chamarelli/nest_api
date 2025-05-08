import { IsDateString, IsEmail, IsString } from 'class-validator';

export class CreateDeveloperDto {
    @IsString()
    name: string;

    @IsEmail()
    esmail: string;

    @IsDateString()
    dateOfBirth: string;

}
