const c_menu = document.querySelector('.menu');
const c_dropdown = document.querySelectorAll('.dropdown');

c_menu.addEventListener('click',function(){
    c_menu.parentElement.classList.toggle('open');
    document.body.classList.toggle('nav-open');
})
c_dropdown.forEach(function(item){
    item.addEventListener('click',function(){
        item.parentElement.classList.toggle('link-open');
    })
})