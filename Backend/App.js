import express from "express";
import mongoose from "mongoose";
import router from "./Routes/User_routes";
import dotenv from "dotenv";

const app = express();
const routes = express.Router();
const port = 5000;

app.use(express.json());
app.use("/users",router);
dotenv.config();
mongoose.connect('mongodb://harshilgamidi:harshil2002@ac-vth7uxt-shard-00-00.9gcj6su.mongodb.net:27017,ac-vth7uxt-shard-00-01.9gcj6su.mongodb.net:27017,ac-vth7uxt-shard-00-02.9gcj6su.mongodb.net:27017/ISTEAPP?ssl=true&replicaSet=atlas-x8xgl1-shard-0&authSource=admin&retryWrites=true&w=majority').then(app.listen(port)).then(()=>console.log("Connected to DataBase and Server is running at port 5000 ")).catch(err=>console.log(err));


