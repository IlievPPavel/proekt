import {Router} from "express";
import * as StudentController from "../Controllers/StudentController"
import * as AdminController from "../Controllers/AdminController"

export const studentRouter = Router();
export const adminRouter = Router();
studentRouter.get("/students",StudentController.getStudents)
studentRouter.post("/student",StudentController.createStudent)
studentRouter.put("/student/:id", StudentController.updateStudent)
studentRouter.delete("/student/:id",StudentController.deleteStudent)
adminRouter.get("/admins",AdminController.getAdmins)
adminRouter.post("/admin",AdminController.createAdmin)
adminRouter.put("/admin/:id", AdminController.updateAdmin)
adminRouter.delete("/admin/:id",AdminController.deleteAdmin)