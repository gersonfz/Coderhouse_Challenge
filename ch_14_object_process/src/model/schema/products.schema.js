const { Schema } = require('mongoose');

module.exports = productSchema = new Schema({
    timestamp: { type: String, default: new Date().toLocaleString() },
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    thumbnail: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
});