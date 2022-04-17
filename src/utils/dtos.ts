import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CompleteVerificationDto {
     @IsNotEmpty()
     @IsNumber()
     id: number;

     @IsNotEmpty()
     @IsString()
     username: string;

     @IsNotEmpty()
     @IsNumber()
     code: number;
}