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
const new_products_home = document.getElementById('new-products-home'); // for home page

const insertData = (insertInto, promise, toShow, insertionFunction) => {
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
    const params = window.location.search;
    console.log(params);
    
    let apiURL = `/api/v1/products${params}`;
    insertData(all_products_container, getAPIdata(apiURL), 13, insertProduct);
}

if (new_products_home) {
    insertData(new_products_home, getAPIdata('/api/v1/products'), 4, insertProduct);
}

const featured = document.getElementById('featured');
const sale = document.getElementById('sale');

if (featured) {
    insertData(featured, getAPIdata('/api/v1/products?featured=true'), 3, insertSmallProds);
}

if (sale) {
    insertData(sale, getAPIdata('/api/v1/products?sale=true'), 3, insertSmallProds);
}

//__________________________Single Product stuff_________________________________________________
const related_product_items_single = document.getElementById('related-product-items-single'); // for single page
const more_product_items_single = document.getElementById('more-product-items-single'); // for single page

if (related_product_items_single) {
    insertData(related_product_items_single, getAPIdata('/api/v1/products'), 4, insertProduct);
}

if (more_product_items_single) {
    insertData(more_product_items_single, getAPIdata('/api/v1/products'), 6, insertProduct);
}

const single_page = document.getElementById('single-page');

if (single_page) { // ? if single_product.html exists
    const small_imgs = document.getElementById('small-imgs');
    const single_product_big_img = document.getElementById('single-product-big-img');
    const single_product_name = document.getElementById('single-product-name');
    const single_product_price = document.getElementById('single-product-price');
    const single_product_rating = document.getElementById('single-product-rating');
    const single_product_desc = document.getElementById('single-product-desc');
    const single_product_sku = document.getElementById('single-product-sku');
    const single_product_categories = document.getElementById('single-product-categories');
    const single_product_tags = document.getElementById('single-product-tags');


    const productID = new URLSearchParams(window.location.search).get('id');

    getAPIdata(`/api/v1/products/${productID}`).then((singleProduct) => {
        let productObj = singleProduct.product;

        single_product_big_img.src = productObj.image;

        single_product_name.innerText = productObj.name;
        single_product_price.innerText = `$${productObj.price}`;
        single_product_desc.innerText = productObj.description;
        single_product_sku.innerText = productObj.otherInfo.sku;
        single_product_categories.innerText = productObj.category.toString();
        single_product_tags.innerText = productObj.tags.toString();

        single_product_rating.classList += ` star-${productObj.rating}`;

        productObj.small_Images.forEach(imgPath => {

            let small_img = document.createElement('div');
            small_img.setAttribute('class', 'small-img img-div');

            let small_imgIMG = document.createElement('img');
            small_imgIMG.setAttribute('width', "600")
            small_imgIMG.setAttribute('height', "768")

            small_imgIMG.setAttribute('src', imgPath)
            small_img.appendChild(small_imgIMG)

            // appending the whole div to small_imgs div
            small_imgs.appendChild(small_img);
        });


    })
}
