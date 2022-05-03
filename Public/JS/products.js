var allProducts = {};

const getAPIdata = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json();

    }
    catch (error) {
        console.log(error);
    }
}

const all_products_container = document.getElementById('all-products-container')

const insertProduct = (insertInto, data) => {
    const product_item_HTML = `                
    <div class="product-img-content">
        <div class="product-img img-div zoom-img-div">
            <a href="../HTML/single_product.html${data._id}"><img src="${data.image}" alt="" width="800"
                    height="1024"></a>
        </div>
        <div class="product-funcs">
            <a href="#" class="product-func-icon">
                <img src="../img/Icons/plus.svg" alt="Plus">
            </a>
            <a href="#" class="product-func-icon center-icon eye-icon">
                <img src="../img/Icons/eye.svg" alt="See">
            </a>
            <a href="#" class="product-func-icon">
                <img src="../img/Icons/heart.svg" alt="Like">
            </a>
        </div>
    </div>
    <div class="product-desc">
        <a href="#" class="cat-text font2">${data.category[0]}</a>
        <a href="../HTML/single_product.html${data._id}" class="name-text font2">${data.name}</a>
        <a href="#" class="price-text font2">$${data.price}</a>
    </div>
    `;
    const productItem = document.createElement('div');
    productItem.classList = "product-item";
    productItem.innerHTML += product_item_HTML;

    insertInto.appendChild(productItem);

}

getAPIdata('/api/v1/products').then((allProducts) => {

    for (eachProduct of allProducts.products) {

        insertProduct(all_products_container, eachProduct);
    }
})