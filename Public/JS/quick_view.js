// getting the quick view
const quickView = document.getElementsByClassName('quick-view')[0];

// opening quick view whenever user clicks on eye button

const all_product_items = document.getElementsByClassName('add-quick-view')[0]; // getting all product items

// getting all the eyes icons from all_product-items
var all_eyeIcons = all_product_items.getElementsByClassName('eye-icon');

for(let each_eyeIcon of all_eyeIcons){
    each_eyeIcon.addEventListener('click', function(e){
        e.preventDefault();
        // quickView.style.display = "flex";
        quickView.style.transform = "translateY(0%)";
    })
}

// close button for quick view
const closeBtn = document.getElementsByClassName('close-btn')[0];


closeBtn.addEventListener('click', ()=>{
    // quickView.style.display = "none";
    quickView.style.transform = "translateY(100%)";
});

// When the user clicks anywhere outside of the quickView, close it
window.onclick = function(event) {
    if (event.target == quickView) {
        // quickView.style.display = "none";
        quickView.style.transform = "translateY(100%)";
    }
  }