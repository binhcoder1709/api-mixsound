import express from "express";
import {getMusicController, postMusicController} from "../controllers/music.controller.js";
const musicRoute = express.Router();

musicRoute.post("/create", postMusicController)
musicRoute.get("/", getMusicController)

export default musicRoute;