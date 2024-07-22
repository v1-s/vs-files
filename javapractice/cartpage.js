document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');

    function loadCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;
        cart.forEach(item => {
            addItemToCart(item.name, item.price);
            total += Number(item.price);
        });
        updateCartTotal(total);
    }

    function addItemToCart(name, price) {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <p>${name} - $${Number(price).toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(productElement);
    }

    function updateCartTotal(total) {
        let formattedTotal = Math.round(total * 100) / 100;
        cartTotalElement.textContent = formattedTotal;

        // cartTotalElement.textContent = total.toFixed(2);
    }

    loadCartItems();

    checkoutButton.addEventListener('click', () => {
        alert('Checkout functionality not implemented yet.');
    });
});