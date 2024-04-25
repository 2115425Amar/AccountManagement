import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,      //remove whitespaces
    },
    email: {
      type: String,
      required: true,
      unique: true,     //one user can login with one emailId
    },
    password: {
      type: String,
      required: true,
    },
    answer:{
      type:String,
      required:true,
    },
    phone:{
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } //jab bhi naya user create hoga tab uska timestamp bhi create hoga
);

export default mongoose.model("users", userSchema);