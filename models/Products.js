const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    createdDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    updatedDate : {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Products', ProductSchema);