import express from "express";
import signale from "signale";
<<<<<<< HEAD
import cors from 'cors';
import { createTables } from "./database/mysql.js";
import { UserRouter } from "./v1/router/UserRouter.js";
import {  ContainerRouter } from "./v1/router/ContainerRouter.js";
import { SensorRouter } from "./v1/router/SensorRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

createTables();

app.use("/user", UserRouter);
app.use("/container", ContainerRouter)
app.use("/sensor", SensorRouter);

app.listen(3000, ()=> {
    signale.success("Server online in port 3000");
=======
import { productsRouter } from "./v1/router/productsRouter.js";
import { userRouter } from "./v1/router/usersRouter.js";
const app = express()

app.use(express.json())
app.use("/api/user",userRouter);
app.use("/api/sensor",productsRouter);

app.listen(3000, ()=> {
    signale.success("Server online in port 3000")
>>>>>>> Pato
})