import mongoose from 'mongoose';
import { required } from 'nodemon/lib/config';
const  { Schema } = mongoose;

const scheme = new Schema({
    name: String, required,
    description: String, required,
    category: String,
    price: { type: Number } ,
    created_date: { type: Date, default: Date.now }
});

export default scheme;