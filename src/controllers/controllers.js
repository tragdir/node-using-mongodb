import mongoose from 'mongoose';
import scheme from 'models.js';

let product = new mongoose.model('Product', scheme);

let addnewProduct = () => {
    let newProduct = new Product(req.body);
    
}