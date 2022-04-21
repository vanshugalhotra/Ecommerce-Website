
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


// getting the active wrapper items 

const wrapper_ul = document.getElementById('wrapper-nav-ul'); // getting the ul container

const wrapper_ul_anchors = wrapper_ul.getElementsByTagName('a'); // getting all the anchors

var active_className = 'wrap-active';

for(let each_wrapper_anchor of wrapper_ul_anchors){
    each_wrapper_anchor.addEventListener('click', function(e){
        e.preventDefault(); // prevent page reload
        var current_wrap_active_anchor = document.getElementsByClassName(active_className); // getting the current active anchor tag
        current_wrap_active_anchor[0].className = current_wrap_active_anchor[0].className.replace(active_className, ""); // basically removing the active class from current active anchor
        this.className += " " + active_className; // adding the active class to the anchor tag clicked
    });
}

