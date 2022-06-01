import {Students} from "../Types/Students";
import {CreateStudentInput} from "../Types/CreateStudentInput";
import {UpdateStudentData} from "../Types/UpdateStudentData";
const mysql = require('mysql2');

export class StudentModel {
    private conn;
    constructor() {
        const pool = mysql.createPool({host:'localhost', user: 'root', database: 'students'});
        this.conn = pool.promise();
    }

    async getStudents():Promise<Students[]>{
        const[rows] = await this.conn.query("SELECT * FROM `students`");
        return rows;

    }

    async createStudent (StudentData: CreateStudentInput): Promise<boolean>{
        const insertDataObject = [
            StudentData.username,
            StudentData.password,
            (StudentData.first_name) ? StudentData.first_name : null,
            (StudentData.last_name) ? StudentData.last_name : null,
            (StudentData.email) ? StudentData.email : null,
            (StudentData.phone_number) ? StudentData.phone_number : null,
        ]
        await this.conn.execute("INSERT INTO `students`(username,password,first_name,last_name,email,phone_number) Values(?, ? , ? , ?, ?, ?)", insertDataObject)
        return true ;
    }

    public  async updateStudent(id:number, updateStudentData : UpdateStudentData): Promise<boolean>{
        const updateStudentDataArray = Object.entries(updateStudentData);
        let setStatement = "";
        let preparedStatementData = [];
        for(let i =0; i<updateStudentDataArray.length; i++){
            setStatement += `${updateStudentDataArray[i][0]}=?`;
            setStatement += (i + 1 !== updateStudentDataArray.length) ? "," : " "
            preparedStatementData.push(updateStudentDataArray[i][1])
        }
        preparedStatementData.push(id);
        await this.conn.execute(`UPDATE students SET ${setStatement} WHERE id = ?`,preparedStatementData)
        return true;
    }

    public async deleteStudent(id:number) : Promise<boolean>{
        await this.conn.execute("DELETE FROM `students` WHERE id = ?",[id]);
        return true;
    }

}
