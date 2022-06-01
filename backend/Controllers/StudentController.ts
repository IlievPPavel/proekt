import {Request, Response} from "express";
import {StudentModel} from "../Models/StudentModel";
import {CreateStudentInput} from "../Types/CreateStudentInput";
import {UpdateStudentData} from "../Types/UpdateStudentData";

const studentModel = new StudentModel()

export const getStudents = async (req:Request,res:Response) =>{
    // const students = await studentModel.getStudents();
    const students = {
        masiv: "masivb",
        dasd: "aasdas",
        oppp: [
            1,2,3
        ]
    }
    res.send(students)
}

export const createStudent= async(req:Request,res:Response)=>{
    console.log(req.body);
    let StudentData: CreateStudentInput = req.body;
    console.log(StudentData);
    if(!StudentData.username){
        return res.send({
            status:400,
            message:"Username has not been provided"
        })
    }
    if(!StudentData.password){
        return res.send({
            status:400,
            message:"Password has not been provided"
        })
    }
    await studentModel.createStudent(StudentData);
    res.send({
        status:200,
        message:"Student created successfully"
    });
}

export const updateStudent = async (req:Request,res:Response) => {
    try {
        const id = parseInt(req.params.id);
        let updateStudentData: UpdateStudentData = req.body
        await studentModel.updateStudent(id, updateStudentData)
        res.status(200).send({
            message: `Student with id ${id} update successfully`
        })
    } catch (e) {
        res.status(403).send({
            message: "Failed to update student"
        })
    }
}

export const deleteStudent = async (req:Request,res:Response) => {
    try {
        const id = parseInt(req.params.id);
        await studentModel.deleteStudent(id);
        res.status(200).send({
            message: `Student with id ${id} was deleted`
        })
    } catch (e) {
        res.status(403).send({
            message: "Failed to delete student"
        })
    }
}



