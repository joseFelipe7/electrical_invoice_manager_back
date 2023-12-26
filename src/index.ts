import express from "express";
import dotenv from 'dotenv';
import {router} from "@/routes/index";

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

app.listen(3388, () => console.log("Server is running on PORT 3388"));