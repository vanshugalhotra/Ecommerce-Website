const Products = require('../models/products'); // importing the products database model
const StatusCodes = require('http-status-codes');
const CustomError = require('../errors');
const path = require('path');

const img_path = '../img/Products';


const getAllProducts = async (req, res) => {

    // applying qureies to our search
    const { featured, sale, name, numericFilters, categories} = req.query;

    var queryObject = {};

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }

    if (sale) {
        queryObject.sale = sale === 'true' ? true : false;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }; // to make search case insensitive
    }

    if(categories){
        queryObject.$or = []

        categories.split(',').forEach((cat)=>{
            let obj = {category: cat};
            queryObject.$or.push(obj)
        })

        console.log(queryObject);
    }

    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        };
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        );
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-');
            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) };
            }
        });
    }

    // fetching the values

    let result = Products.find(queryObject)

    const products = await result;
    res.status(StatusCodes.OK).json({ nbHits: products.length, products })
}


const createProduct = async (req, res) => {

    // *changing image paths, 
    req.body.image = path.join(img_path, req.body.image);

    req.body.small_Images = req.body.small_Images.map((element) => {
        return path.join(img_path, element);
    })

    const product = await Products.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
}
const getSingleProduct = async (req, res) => {
    const { id: productID } = req.params;
    const product = await Products.findOne({ _id: productID });

    if (!product) {
        throw new CustomError.NotFoundError(`No product with id : ${productID}`);
    }
    res.status(StatusCodes.OK).json({ product });
}
const updateProduct = async (req, res) => {
    const { id: productID } = req.params;
    const product = await Products.findOneAndUpdate({ _id: productID }, req.body,
        { new: true, runValidators: true });

    if (!product) {
        throw new CustomError.NotFoundError(`No product with id : ${productID}`);
    }
    res.status(StatusCodes.OK).json({ product });
}
const deleteProduct = async (req, res) => {
    const { id: productID } = req.params;
    const product = await Products.findOneAndRemove({ _id: productID });

    if (!product) {
        throw new CustomError.NotFoundError(`No product with id : ${productID}`);
    }
    res.status(StatusCodes.OK).json({ deleted: true });
}

module.exports = {
    getAllProducts, createProduct,
    getSingleProduct, updateProduct, deleteProduct
}