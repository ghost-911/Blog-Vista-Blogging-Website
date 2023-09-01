const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const multer = require ("multer");



dotenv.config();
app.use(express.json());


// Connection to MongoDB code below

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("connected to mongo"))
 .catch(err => console.log(err));

 // images storage
 const storage = multer.diskStorage({
    destination : (req , file , cb) =>{
        cb(null, "images")  // cb stands for callback
    },
    filename: (req , file, cb) => {
        cb(null, "hello.jpeg");
    }
 })

 const upload = multer({storage: storage})
 app.post("/api/upload", upload.single("file"), (req, res) =>{
    res.status(200).json("File upload successfull");
 }); 


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoriesRoute);


app.listen("5000", () => {
    console.log("backend is running");
});




