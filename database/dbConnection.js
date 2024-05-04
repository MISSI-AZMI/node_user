const mongoose =require("mongoose")



const dbconnect =(dbURL)=>
    {
         mongoose.connect(dbURL).then(()=>
        {
            console.log("database is up");
        }).catch((err)=>
        {
            console.log("database connection error "+ err)
        })

    }


module.exports = dbconnect