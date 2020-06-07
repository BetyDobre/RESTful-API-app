const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const verify = require('./verifytoken');

// get back all the products
router.get('/', verify, async (req,res) =>{
    try{
        const products = await Product.find();
        res.json(products);
    }catch(err){
        res.json({message:err});
    }
});

// submit a product
router.post('/', async (req,res) =>{
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
    })
    try{
        const savedProduct = await product.save();
        res.json(savedProduct);
    }
    catch(err){
        res.json({message:err});
    }
});

// get back a specific product by id
router.get('/:productId', async (req, res)=>{
    try{
        const product = await Product.findById(req.params.productId);
        res.json(product);
    }catch(err){
        res.json({message:err});
    }
})

// delete a specific product by id
router.delete('/:productId', async (req, res)=>{
    try{
        const removedProduct = await Product.remove({_id: req.params.productId})
        res.json(removedProduct);
    }catch(err){
        res.json({message:err});
    }    
});

// update a specific product by id
router.patch('/:productId', async (req, res)=>{
    try{
        const updatedProduct = await Product.updateMany({_id: req.params.productId},
             {$set: {name:req.body.name,
               price:req.body.price,
               category:req.body.category,
               updatedDate: Date.now()}
            }
            );
            res.json(updatedProduct);
    }catch(err){
        res.json({message:err});
    }    
});

module.exports = router;