document.addEventListener('DOMContentLoaded', function() {
    // Sample function to add an item to the cart
    function addToCart(productId) {
        console.log('Product added to cart:', productId);
        // Logic to add product to cart
    }

    // Event listener for add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            addToCart(productId);
        });
    });
});
