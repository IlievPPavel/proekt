import express = require("express");
import  {Application, json} from "express"
import {adminRouter, studentRouter} from "./Routers/UserRouter";
const app : Application = express();

let cors = require("cors");

app.use(json());
app.use(cors());
app.use("/",studentRouter)
app.use("/",adminRouter)
app.listen(8080, () =>{
    console.log("Connected")
})



