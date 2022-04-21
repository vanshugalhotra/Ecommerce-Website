// code for working the theme button
const themeBtn = document.getElementById('theme-img');

themeBtn.addEventListener('click', () => {

    let element = document.body;
    // toggle will add and remove the class whenever the button is clicked
    element.classList.toggle('girl-theme');

});

// code for quantity picker: single_product.html

const quantiy_input = document.getElementById('quantity'); // getting the quantity from input box
const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');

var quantity = parseInt(quantiy_input.value); // converting the input value (string) to int

plusBtn.addEventListener('click', () => {
    quantity += 1;
    quantiy_input.value = quantity;
});

minusBtn.addEventListener('click', () => {
    if (quantity != 1) { // if quantity is already one, dont need to decrement it
        quantity -= 1;
        quantiy_input.value = quantity;
    }
});
