import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateAuthDto {
@IsString()
@MinLength(3, {message: "Kamida 3 ta harf bo'lsin"})
@MaxLength(50)
username!: string;

@IsEmail()
@IsNotEmpty()
email!: string;

@IsString()
@Matches(/^[A-Za-z0-9]{6,}$/, {
  message: 'Password must contain only letters and numbers, min 6 chars',
})
password!: string;
}
