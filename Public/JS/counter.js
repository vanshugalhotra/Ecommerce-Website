// code for quantity picker

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
