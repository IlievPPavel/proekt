import {Admins} from "../Types/Admins";
import {CreateAdminInput} from "../Types/CreateAdminInput";
import {UpdateAdminData} from "../Types/UpdateAdminData";
import {createAdmin, deleteAdmin, getAdmins, updateAdmin} from "../Controllers/AdminController";
import {Students} from "../Types/Students";
const mysql = require('mysql2');

export class AdminModel {
    private conn;
    constructor() {
        const pool = mysql.createPool({host:'localhost', user: 'root', database: 'students'});
        this.conn = pool.promise();
    }

    async getAdmins():Promise<Admins[]>{
        const[rows] = await this.conn.query("SELECT * FROM `admins`");
        return rows;

    }

    async createAdmin (AdminData: CreateAdminInput): Promise<boolean>{
        const insertDataObject = [
            AdminData.username,
            AdminData.password,
            (AdminData.first_name) ? AdminData.first_name : null,
        ]
        await this.conn.execute("INSERT INTO `admins`(username,password,first_name) Values(?, ? , ? )", insertDataObject)
        return true ;
    }

    public  async updateAdmin(id:number, updateAdminData : UpdateAdminData): Promise<boolean>{
        const updateAdminDataArray = Object.entries(updateAdminData);
        let setStatement = "";
        let preparedStatementData = [];
        for(let i =0; i<updateAdminDataArray.length; i++){
            setStatement += `${updateAdminDataArray[i][0]}=?`;
            setStatement += (i + 1 !== updateAdminDataArray.length) ? "," : " "
            preparedStatementData.push(updateAdminDataArray[i][1])
        }
        preparedStatementData.push(id);
        await this.conn.execute(`UPDATE admins SET ${setStatement} WHERE id = ?`,preparedStatementData)
        return true;
    }

    public async deleteAdmin(id:number) : Promise<boolean>{
        await this.conn.execute("DELETE FROM admins WHERE id = ?",[id]);
        return true;
    }

}
