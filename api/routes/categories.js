const router = require("express").Router();
// importing the model for which we will ne authentication
// it is the user.js model
const Category = require("../models/Category");

router.post("/" , async (req, res) => {
    const newCatg =  new Category(req.body);
    try{
        const savedCatg = await newCatg.save();
        res.status(200).json(savedCatg);


    }catch(err){
        res.status(500).json(err);
    }
})
router.get("/" , async (req, res) => {
    try{
        const catgs = await Category.find();
        res.status(200).json(catgs);


    }catch(err){
        res.status(500).json(err);
    }
})









module.exports = router;