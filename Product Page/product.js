window.onload = function() {
    // Load cart number from storage when page loads
    let cartNumber = document.querySelector('#cart-number');
    let storedCartNumber = localStorage.getItem('cartNumber');

    if (storedCartNumber) {
        cartNumber.innerHTML = storedCartNumber;
    }

    let addToCartBtn = document.querySelector('#add-to-cart');
    addToCartBtn.addEventListener('click', function() {
        let quantity = document.querySelector('.product-quantity').value;
        let newCartNumber = parseInt(storedCartNumber) + parseInt(quantity);
        
        // Update cart number in storage when add to cart button is clicked
        localStorage.setItem('cartNumber', newCartNumber.toString());
        cartNumber.innerHTML = newCartNumber.toString();

        // Calculate new subtotal
        let pricePerItem = 25.99; // Replace this with the actual price per item
        let newSubtotal = pricePerItem * newCartNumber;

        // Update subtotal in storage
        localStorage.setItem('subtotal', newSubtotal.toString());

        // Redirect to cart page
        window.location.href = '../Cart Page/cart.html';
    });
}
