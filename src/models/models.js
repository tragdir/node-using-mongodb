import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    name: {
        type: String, 
        required: "enter a name:"
        },
    description:{
        type: String,
        required: "enter a description"
    },
    category:{
        type: String
    },
    price: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
