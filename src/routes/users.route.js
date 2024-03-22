import express from "express";
import {database} from "../config/firebase.config.cjs";
import {getUsersController, addUserController} from "../controllers/user.controller.js";
const usersRouter = express.Router();

// get users
usersRouter.get("/", getUsersController)
usersRouter.post("/create", addUserController)
//add user

export {usersRouter};