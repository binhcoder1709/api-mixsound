import express from "express";
import {checkUserController} from "../controllers/auth.controller.js";
const authRoute = express.Router();

authRoute.post("/", checkUserController);

export default authRoute;