document.addEventListener("DOMContentLoaded", () => {
    // Medicine prices in LKR
    const medicinePrices = {
        paracetamol: 1800, // LKR
        ibuprofen: 2520,   // LKR
        aspirin: 1440,     // LKR
        acetaminophen: 2160, // LKR
        naproxen: 2880,    // LKR
        diclofenac: 3600,  // LKR
        amoxicillin: 4320, // LKR
        penicillin: 3240,  // LKR
        ciprofloxacin: 3960, // LKR
        doxycycline: 4680, // LKR
        cephalexin: 5040,  // LKR
        clindamycin: 5400, // LKR
        fluoxetine: 6480,  // LKR
        sertraline: 5760,  // LKR
        citalopram: 6120,  // LKR
        paroxetine: 6840,  // LKR
        escitalopram: 7200, // LKR
        duloxetine: 7920,  // LKR
        loratadine: 2160,  // LKR
        cetirizine: 1800,  // LKR
        diphenhydramine: 1440, // LKR
        chlorpheniramine: 2520, // LKR
        lisinopril: 3600,  // LKR
        amlodipine: 2880,  // LKR
        atenolol: 2520,    // LKR
        metoprolol: 3240,  // LKR
        losartan: 3960,    // LKR
        spironolactone: 4320, // LKR
        fexofenadine: 3240,      // LKR
        levocetirizine: 2880     // LKR

    };

    const cart = {};
    const cartTable = document.querySelector("#cartTable tbody");
    const totalPriceElement = document.querySelector("#totalPrice");

    let favouriteOrder = null; // To store the favourite cart

    // ** Step 1: Render Medicine Prices in the Menu (LKR) **
    function renderMedicinePrices() {
        Object.keys(medicinePrices).forEach((medicineId) => {
            const priceElement = document.querySelector(`#${medicineId}-price`);
            if (priceElement) {
                priceElement.textContent = `LKR ${medicinePrices[medicineId].toFixed(2)}`; // Show price in LKR
            }
        });
    }

    // ** Step 2: Update Cart **
    function updateCart(medicineId, quantity) {
        const price = medicinePrices[medicineId]; // Use LKR price directly
        if (quantity > 0) {
            cart[medicineId] = { name: capitalizeFirstLetter(medicineId), quantity, price };
        } else {
            delete cart[medicineId];
        }
        renderCart();
    }

    // ** Step 3: Render Cart **
    function renderCart() {
        cartTable.innerHTML = "";
        let totalPrice = 0;

        for (let medicineId in cart) {
            const { name, quantity, price } = cart[medicineId];
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = name;

            const quantityCell = document.createElement("td");
            quantityCell.textContent = quantity;

            const priceCell = document.createElement("td");
            priceCell.textContent = `LKR ${(price * quantity).toFixed(2)}`; // Display in LKR

            const actionCell = document.createElement("td");
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-btn");
            removeButton.addEventListener("click", () => {
                delete cart[medicineId];
                renderCart();
            });
            actionCell.appendChild(removeButton);

            row.appendChild(nameCell);
            row.appendChild(quantityCell);
            row.appendChild(priceCell);
            row.appendChild(actionCell);

            cartTable.appendChild(row);
            totalPrice += price * quantity;
        }

        totalPriceElement.textContent = `LKR ${totalPrice.toFixed(2)}`; // Total price in LKR
    }

    // Capitalize First Letter
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // ** Step 4: Event Listeners for Quantity Controls **
    document.querySelectorAll(".quantity-wrapper").forEach((wrapper) => {
        const minusButton = wrapper.querySelector("button:first-child");
        const plusButton = wrapper.querySelector("button:last-child");
        const quantityInput = wrapper.querySelector("input[type='number']");
        const medicineId = quantityInput.id;

        minusButton.addEventListener("click", () => {
            let currentValue = parseInt(quantityInput.value, 10) || 0;
            if (currentValue > 0) {
                quantityInput.value = currentValue - 1;
                updateCart(medicineId, parseInt(quantityInput.value, 10));
            }
        });

        plusButton.addEventListener("click", () => {
            let currentValue = parseInt(quantityInput.value, 10) || 0;
            quantityInput.value = currentValue + 1;
            updateCart(medicineId, parseInt(quantityInput.value, 10));
        });

        quantityInput.addEventListener("input", () => {
            let currentValue = parseInt(quantityInput.value, 10);
            if (isNaN(currentValue) || currentValue < 0) {
                quantityInput.value = 0;
            }
            updateCart(medicineId, parseInt(quantityInput.value, 10));
        });
    });

    // ** Step 5: "Buy Now" Button **
    document.getElementById("buyNow").addEventListener("click", () => {
        if (Object.keys(cart).length === 0) {
            alert("Your cart is empty! Add items before proceeding to checkout.");
        } else {
            // Save the cart to localStorage before navigating to payment page
            localStorage.setItem("cart", JSON.stringify(cart));
            window.location.href = "payment.html";
        }
    });

    // ** Step 6: "Add to Favourites" Button **
    document.getElementById("addToFavourites").addEventListener("click", () => {
        if (Object.keys(cart).length === 0) {
            alert("Your cart is empty! Add items before saving to favourites.");
        } else {
            favouriteOrder = { ...cart }; // Clone the cart
            alert("Your cart has been saved to favourites.");
        }
    });

    // ** Step 7: "Apply Favourites" Button **
    document.getElementById("applyFavourites").addEventListener("click", () => {
        if (!favouriteOrder) {
            alert("No favourite order found! Save an order first.");
        } else {
            // Clear current cart
            Object.keys(cart).forEach((key) => delete cart[key]);

            // Reset all input fields to zero
            document.querySelectorAll(".quantity-wrapper input").forEach((input) => (input.value = 0));

            // Apply favourite order
            Object.keys(favouriteOrder).forEach((medicineId) => {
                const { quantity } = favouriteOrder[medicineId];
                document.getElementById(medicineId).value = quantity; // Set quantity in input
                updateCart(medicineId, quantity); // Update the cart
            });

            alert("Favourite order has been applied to your cart.");
        }
    });

    // Render prices in the menu
    renderMedicinePrices();
});
