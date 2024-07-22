document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // const cart =  [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const productElement = event.target.closest('.product');
            if (productElement) {
                const id = productElement.getAttribute('data-id');
                const name = productElement.getAttribute('data-name');
                const price = productElement.getAttribute('data-price');
                
                addToCart(id, name, price);
            }
        });
    });
    
    function addToCart(id, name, price) {
        // let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ id, name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'cart.html';
    }
    
});