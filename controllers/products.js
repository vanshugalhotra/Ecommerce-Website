const Products = require('../models/products'); // importing the products database model
const StatusCodes = require('http-status-codes');

const getAllProducts = async (req, res)=>{
    const products = await(Products.find({}));
    res.status(StatusCodes.OK).json({products, nbHits: products.length})
}
const createProduct = async (req, res)=>{
    const product = await Products.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
}
const getSingleProduct = async (req, res)=>{

}
const updateProduct = async (req, res)=>{

}
const deleteProduct = async (req, res)=>{

}

module.exports = {
    getAllProducts, createProduct,
    getSingleProduct, updateProduct, deleteProduct
}