// code for working the theme button
const themeBtn = document.getElementById('theme-img');

themeBtn.addEventListener('click', () => {

    let element = document.body;
    // toggle will add and remove the class whenever the button is clicked
    element.classList.toggle('girl-theme');

});