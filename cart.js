const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsList = document.getElementById("cart-items");
const finalPriceElement = document.getElementById("final-price");

// Function to remove a product from the cart
function removeProduct(index) {
    cart.splice(index, 1);
    updateCart();
    displayCart();
}

// Function to update the cart in localStorage
function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to display the cart items and calculate the final price
function displayCart() {
    cartItemsList.innerHTML = "";

    if (cart.length === 0) {
        const cartEmptyMessage = document.createElement("p");
        cartEmptyMessage.textContent = "Your cart is empty.";
        cartItemsList.appendChild(cartEmptyMessage);
        finalPriceElement.textContent = "Final Price: $0.00";
    } else {
        let finalPrice = 0;
        cart.forEach((product, index) => {
            // #####################ul   div
            const cartItem = document.createElement("div");
            cartItem.className="main_iam_cart";
            cartItem.innerHTML = `
                <img src="${product.image}" alt="Product Image">
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <p>Quantity: ${product.quantity}</p>
                <button onclick="removeProduct(${index})">Remove</button>
            `;
            cartItemsList.appendChild(cartItem);

            finalPrice += product.price * product.quantity;
        });

        // Convert the final price to a number using parseFloat
        const finalPriceNumber = parseFloat(finalPrice);
        finalPriceElement.textContent = `Final Price: $${finalPriceNumber.toFixed(2)}`;
    }
}

displayCart();