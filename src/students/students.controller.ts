import { StudentService } from "./students.service";
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateStudentDto } from "./dtos/create-student.dto";

@Controller('students')

export class StudentsController{
    studentService: StudentService;

    constructor(){
        this.studentService = new StudentService();
    }
    
    @Get()
    listStudents(){
        return this.studentService.list();
    }

    @Get('/:id')
    findStudents(@Param('id') id: string){
        return this.studentService.find(id);
    }

    @Post()
    createStudents(@Body() body:CreateStudentDto){
        return this.studentService.create(body);
    }
}