
const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');


btnCart.addEventListener('click', () => {
    cart.classList.add('cart-active');
});

btnClose.addEventListener('click', () => {
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadFood);
function loadFood() {
    loadContent();
}

function loadContent() {
    // Remove Food items from Cart
    let btnRemove = document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn) => {
        btn.addEventListener('click', removeItem);
    });

    //Porduct Item Change Event :
    let qtyElemnets= document.querySelectorAll('.cart-quantity');

    qtyElemnets.forEach((input) => {
        input.addEventListener('change', changeQty);
    });

}


// Remover Item:
function removeItem() {
    if(confirm('Are you sure to remover'))
    this.parentElement.remove();
}

// Change Quantity:
function changeQty(){
    if(isNaN(this.value) || this.value < 1){
        this.value=1;
    }
}


function show() {
    let swipe=document.getElementById('cart')
    swipe.style.display='block';
    swipe.style.right='0'
}