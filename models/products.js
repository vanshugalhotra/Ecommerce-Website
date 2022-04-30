const mongoose = require('mongoose');

// what is specified in the schema only that will be sent to the database, rest will be ignored
const ProductsSchema= new mongoose.Schema({
    // products fiels will be defined here
});

module.exports = mongoose.model('Products', ProductsSchema)