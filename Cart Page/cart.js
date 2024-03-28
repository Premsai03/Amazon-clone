window.onload = function() {
    // Load cart number from storage when page loads
    let cartNumber = document.querySelector('#cart-number');
    let storedCartNumber = localStorage.getItem('cartNumber');
    let cartLeft = document.querySelector('.cart-left');
    let subtotalElement = document.querySelector('.cart-subtotal');
    let listSubtotalElement = document.querySelector('.cart-list-subtotal');

    if (storedCartNumber && storedCartNumber !== '0') {
        cartNumber.innerHTML = storedCartNumber;
        // Load subtotal from storage and display
        let storedSubtotal = localStorage.getItem('subtotal');
        let subtotalText = 'Subtotal (' + storedCartNumber + ' items): $' + storedSubtotal;
        subtotalElement.innerHTML = subtotalText;
        listSubtotalElement.innerHTML = subtotalText;
    } else {
        cartLeft.innerHTML = '<span class="empty-cart-message">Your Amazon Cart is empty.</span>';
        let emptySubtotalText = 'Subtotal (0 items): $0';
        subtotalElement.innerHTML = emptySubtotalText;
        listSubtotalElement.innerHTML = emptySubtotalText;
    }

    let deleteBtn = document.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', function() {
        cartLeft.innerHTML = '<span class="empty-cart-message">Your Amazon Cart is empty.</span>';
        
        // Update cart number in storage when delete button is clicked
        localStorage.setItem('cartNumber', '0');
        cartNumber.innerHTML = '0';

        // Update subtotal in storage
        localStorage.setItem('subtotal', '0');

        // Update subtotal display
        let emptySubtotalText = 'Subtotal (0 items): $0';
        subtotalElement.innerHTML = emptySubtotalText;
        listSubtotalElement.innerHTML = emptySubtotalText;
    });
}