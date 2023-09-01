const mongoose = require("mongoose");

// user schema

const CategorySchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true,
    },
  },

  { timestamps: true }
);

// exporting the above mongoose model and schema

module.exports = mongoose.model("Category", CategorySchema);

