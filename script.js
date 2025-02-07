function showSidebar() {
    const show = document.querySelector('#ul');
    show.style.display = 'block'

}

function hideSidebar() {
    const show = document.querySelector('#ul');
    show.style.display = 'none'
}


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

document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    let valid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value;
    let service = document.getElementById("service").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("dateError").textContent = "";
    document.getElementById("serviceError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        valid = false;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
        valid = false;
    }
    if (date === "") {
        document.getElementById("dateError").textContent = "Please select a date.";
        valid = false;
    }
    if (service === "") {
        document.getElementById("serviceError").textContent = "Please select a service.";
        valid = false;
    }
    
    if (!valid) {
        event.preventDefault();
    }
});
