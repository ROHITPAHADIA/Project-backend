import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.status("public"))
app.use(cookieParser())


//routes import 
import userRouter from './routes/user.routes'


//routes declaration
app.use("/api/v1/users", userRouter)  //iske baad control user.routed.js me /register pe jayega 

export { app }