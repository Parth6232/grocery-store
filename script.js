// Initialize cart as an empty array
let cart = [];
let totalCost = 0;

// Function to add items to the cart
function addToCart(item, price) {
    cart.push({ item, price }); // Add item to the cart
    totalCost += price; // Add the price of the item to the total cost
    updateCart(); // Update the cart display
}

// Function to update the cart display and total cost
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Clear current cart items display
    
    // Display each item in the cart
    cart.forEach(cartItem => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        // ✅ Corrected template literals
        cartItemDiv.innerHTML = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;
        cartItemsDiv.appendChild(cartItemDiv);
    });

    // Update the total cost display
    const totalDiv = document.getElementById('total-cost');
    // ✅ Corrected template literals
    totalDiv.innerHTML = `Total: $${totalCost.toFixed(2)}`;
}

// Function to clear the cart
function clearCart() {
    cart = []; // Empty the cart
    totalCost = 0; // Reset total cost to 0
    updateCart(); // Update the cart display to show empty cart
}
