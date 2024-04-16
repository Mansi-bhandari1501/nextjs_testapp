import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectdb from "./config/db.js"
import routes from "./routes/index.js"
dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use("/", routes);
app.use(cors())

const port  = process.env.PORT
connectdb()
app.listen(port,()=>{
    console.log(`Server is running on port no ${port}`)
})