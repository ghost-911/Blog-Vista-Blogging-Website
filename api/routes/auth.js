const router = require("express").Router();
// importing the model for which we will ne authentication 
// it is the user.js model
const User = require("../models/User");
const bcrypt = require('bcrypt');

// Register
router.post("/register", async(req,res) =>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password: hashedPass,
        })
        const user = await newUser.save();//save method coming from mongoose

        //after succesfull completion of all process the below statement will be executed.
        res.status(200).json(user);
        
    }catch(err){
        res.status(500).json(err);
    }
});

//LOGIN PROCESS FROM BELOW

router.post("/login" , async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("You Have Entered Wrong credentials!")

        const validated = await bcrypt.compare(req.body.password,user.password)
        !validated && res.status(400).json("You Have Entered Wrong credentials!")

        const {password, ...others } = user._doc;

        res.status(200).json(others);
        
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router