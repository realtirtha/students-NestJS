import { IsString } from "class-validator";

export class CreateStudetDto{

    @IsString()
    fullname:string;

    @IsString()
    id:string;

    @IsString()
    address:string;

    @IsString()
    contact:string;

}