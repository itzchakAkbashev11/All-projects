const express = require("express")
require("dotenv").config()
const mainRouter = require("./routes/mainRoutes.routes")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()

app.use(cookieParser())
app.use(express.json())

app.use(cors({
    origin: process.env.URLS.split(";"),
    methods: ["GET", "PUT", "DELETE", "POST", "PATCH"],
    credentials:true
}))

app.use(mainRouter)


app.listen(
    process.env.PORT,
    () => console.log("server listening on port " + process.env.PORT)
)
