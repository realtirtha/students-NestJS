import { IsString } from "class-validator";

export class CreateStudentDto{

    @IsString()
    fullname:string;

    @IsString()
    id:string;

    @IsString()
    address:string;

    @IsString()
    contact:string;

}