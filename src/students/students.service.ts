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

  create(content: string) {
    return this.studentRepo.create(content);
  }
}
