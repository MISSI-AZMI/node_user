// epxress router
const express = require("express")
const router = express.Router();

//  user model
const User = require('../database/model/userModel')


// register user
router.route("/register").post(async (req,res)=>
        { try {
            const data = req.body;
            const newUser = new User(data);
            const response = await  newUser.save();
            console.log("data is saved");
            res.status(200).json(response) 
            
        } catch (err) {
            console.log("data is unable to saved");
            res.status(500).json(err) 
        }
        }

)

router.route("/allUser").get( async (req,res)=>
{
    try {

        const data = await User.find()
        console.log("data is fetched")
        res.status(200).json(data);
        
    } catch (err) 
    {
            console.log("data is unable to fetched");
            res.status(500).json(err)
    }
})
router.route("/User/:rank").get( async (req,res)=>
    {
        try {
            const rank = req.params
            const data = await User.find(rank)
            console.log("data is fetched")
            res.status(200).json(data);
            
        } catch (err) 
        {
                console.log("data is unable to fetched");
                res.status(500).json(err)
        }
    })
    







module.exports = router
