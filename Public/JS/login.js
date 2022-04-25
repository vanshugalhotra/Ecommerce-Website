// working of a checkbox

const check_box = document.getElementById('rememberme');
const rememberme_Label = document.getElementById('remembermeContent');


check_box.addEventListener('click', ()=>{
    rememberme_Label.classList.toggle('checkbox-checked');
});