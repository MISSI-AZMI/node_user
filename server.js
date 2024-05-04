// epxress app
const express = require("express")
const app = express();


// body parser send body data to req.body
const bodyparser = require("body-parser")
app.use(bodyparser.json())


// dotenv
const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT
const DBURL = process.env.dbURL


// connectionn to database
const dbconnect =require("./database/dbConnection")
dbconnect(DBURL);


// importing router

const router = require("./routes/Userroute")

app.use("/user",router);








// listening to port
app.listen(PORT,()=>
{
    console.log("listinig to port")
})