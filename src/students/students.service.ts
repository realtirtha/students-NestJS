import { CreateStudentDto } from "./dtos/create-student.dto";
import { StudentRepository } from "./students.repository";

export class StudentService {
  studentRepo: StudentRepository;

  constructor() {
    // Create an instance of StudentRepository, not StudentService
    this.studentRepo = new StudentRepository();
  }

  list() {
    return this.studentRepo.list();
  }

  find(id: string) {
    return this.studentRepo.find(id);
  }

  create(dto: CreateStudentDto) {
    const {fullname, id, address, contact} = dto;
    return this.studentRepo.create(fullname, id, address, contact);
  }
}
