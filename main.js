'use strict';

const productUl = document.querySelector('.products-list');
const productLi = document.querySelector('.nav-item');
const subProductLi = document.querySelector('.subnav-item');

productUl.addEventListener('click', (event) => {
    const activeEl = document.querySelector('.active');
    const activeSubEl = document.querySelector('.sub-active');

    if(event.target.classList.contains('nav-item')) {
        if (activeEl) {
            activeEl.classList.remove('active');
             
        } 
        event.target.classList.add ('active');
    } 

    if(event.target.classList.contains('subnav-item')) { 
        if (activeSubEl) {
            activeSubEl.classList.remove('sub-active');
        } 
        event.target.classList.add ('sub-active');
    } 

    if(event.target.classList.contains('btn-buy')) {
        productLi.classList.remove('active');
        subProductLi.classList.remove('sub-active');
        alert('You buy a product');
    } 
});




