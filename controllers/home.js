const Products = require('../models/products'); // importing the products database model

const homePage = (req, res)=>{
    res.status(200).render("index.html");
}

module.exports = {
    homePage,
}