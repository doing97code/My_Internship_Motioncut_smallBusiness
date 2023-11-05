document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productName = button.getAttribute("data-name");
            const productPrice = parseFloat(button.getAttribute("data-price"));
            const productImage = button.getAttribute("data-image");

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if the product is already in the cart
            const existingProductIndex = cart.findIndex(item => item.name === productName);
            if (existingProductIndex !== -1) {
                // If the product is already in the cart, increase its quantity
                cart[existingProductIndex].quantity++;
            } else {
                // If it's a new product, add it to the cart
                cart.push({
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1,
                });
            }

            // Store the updated cart in localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });
});


