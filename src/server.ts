import * as dotenv from 'dotenv';
import express from "express";
import mongoose from 'mongoose';
import router from './routes/routes';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
mongoose.connect("mongodb://localhost:27017/Produtos")
.then(()=>console.log("Connection successsfull"))
.catch((err)=>console.log(err));

app.use(express.json());

app.use("/api", router);

app.listen(port, () => { console.log(`Running on http://localhost:${port}/api`) });