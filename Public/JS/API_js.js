import { insertProduct, insertSmallProds } from "./insertProd.js";

const getAPIdata = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json();

    }
    catch (error) {
        console.log(error);
    }
}


const all_products_container = document.getElementById('all-products-container') // for products page
const new_products_home = document.getElementById('new-products-home');

const insertData = (insertInto, promise, toShow, insertionFunction)=>{
    let i = 0;
    promise.then((allProducts) => {

        for (let eachProduct of allProducts.products) {

            if (i == toShow) {
                break;
            }

            insertionFunction(insertInto, eachProduct);
            i++;
        }
    })
}

if (all_products_container) {
    insertData(all_products_container, getAPIdata('/api/v1/products'), 13, insertProduct);
}

if (new_products_home) {
    insertData(new_products_home, getAPIdata('/api/v1/products'), 4, insertProduct);
}

const featured = document.getElementById('featured');
const sale = document.getElementById('sale');

if (featured) {
    insertData(featured, getAPIdata('/api/v1/products'), 3, insertSmallProds);
}

if (sale) {
    insertData(sale, getAPIdata('/api/v1/products'), 3, insertSmallProds);
}