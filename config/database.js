import mongoose from "mongoose";
import 'dotenv/config.js';

let url = process.env.URL_MONGO

mongoose.connect (url)
.then(() => console.log("database connected"))
.catch(error => console.log(error))