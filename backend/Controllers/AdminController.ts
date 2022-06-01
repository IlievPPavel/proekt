import {Request, Response} from "express";
import {AdminModel} from "../Models/AdminModel";
import {CreateAdminInput} from "../Types/CreateAdminInput";
import {UpdateAdminData} from "../Types/UpdateAdminData";

const adminModel = new AdminModel()

export const getAdmins = async (req:Request,res:Response) =>{
    const admins = await adminModel.getAdmins();
    res.send(admins)
}

export const createAdmin= async(req:Request,res:Response)=>{
    let AdminData: CreateAdminInput = req.body;
    if(!AdminData.username){
        return res.send({
            status:400,
            message:"Username has not been provided"
        })
    }
    if(!AdminData.password){
        return res.send({
            status:400,
            message:"Password has not been provided"
        })
    }
    await adminModel.createAdmin(AdminData);
    res.send({
        status:200,
        message:"Admin created successfully"
    });
}

export const updateAdmin = async (req:Request,res:Response) => {
    try {
        const id = parseInt(req.params.id);
        let updateAdminData: UpdateAdminData = req.body
        await adminModel.updateAdmin(id, updateAdminData)
        res.status(200).send({
            message: `Admin with id ${id} update successfully`
        })
    } catch (e) {
        res.status(403).send({
            message: "Failed to update admin"
        })
    }
}

export const deleteAdmin = async (req:Request,res:Response) => {
    try {
        const id = parseInt(req.params.id);
        await adminModel.deleteAdmin(id);
        res.status(200).send({
            message: `Admin with id ${id} was deleted`
        })
    } catch (e) {
        res.status(403).send({
            message: "Failed to delete Admin"
        })
    }
}
