import express from 'express'
import cors from 'cors'
import {usersRouter} from './routes/users.route.js';
import authRoute from "./routes/auth.route.js";
import cookieParser from 'cookie-parser'
import musicRoute from "./routes/music.route.js";

const app = express();

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use("/users", usersRouter)
app.use("/login", authRoute);
app.use("/musics", musicRoute)

const PORT = 3000;
app.listen(PORT, () => {
    console.log("server is running with port ", PORT);
})