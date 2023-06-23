import { readFile,writeFile } from "fs/promises"; 

export class StudentRepository{
    async create(fullname: string, id: string, address: string, contact: string){
        const contents = await readFile('students.json', 'utf8');

        //converting raw data to json
        const students = JSON.parse(contents);

        //creating new student json 
        const newStudent = {
            id: Math.floor(Math.random() * 999),
            fullname: fullname,
            address: address,
            contact: contact,
          };
          students[newStudent.id] = newStudent;
        
        //store json
        await writeFile('students.json', JSON.stringify(students))
    }

    async list(){
        const contents = await readFile('students.json', 'utf8');
        const students = JSON.parse(contents);
        return students;
    }

    async find(id:string){
        const contents = await readFile('students.json','utf8');
        const students = JSON.parse(contents);
        return students[id];
    }
}