document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    const tabContents = document.querySelectorAll(".tab-content");
    const nextToPayment = document.getElementById("nextToPayment");
    const nextToComplete = document.getElementById("nextToComplete");
    const paymentMethodRadios = document.getElementsByName("paymentMethod");
    const cardPaymentForm = document.getElementById("cardPaymentForm");
    const backToPharmacy = document.getElementById("backToPharmacy");
    const deliveryDateElement = document.getElementById("deliveryDate");

    // Fetch cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    let totalPrice = 0;

    // Helper: Show a specific tab
    function showTab(index) {
        tabContents.forEach((tab, i) => {
            tab.classList.toggle("hidden", i !== index);
            steps[i].classList.toggle("active", i === index);
        });
    }

    // Helper: Validate form fields
    function validateForm(formId) {
        const form = document.getElementById(formId);
        const inputs = form.querySelectorAll("input[required]");

        for (let input of inputs) {
            if (!input.value.trim()) {
                alert(`Please fill out the "${input.name}" field.`);
                input.focus();
                return false;
            }
        }
        return true;
    }

    // Step 1: Move to Payment Options
    nextToPayment.addEventListener("click", () => {
        if (validateForm("deliveryDetailsForm")) {
            showTab(1);
        }
    });

    // Step 2: Show card payment form conditionally
    paymentMethodRadios.forEach((radio) => {
        radio.addEventListener("change", (e) => {
            cardPaymentForm.classList.toggle("hidden", e.target.value !== "card");
        });
    });

    // Step 3: Populate Order Summary and Complete the Order
    nextToComplete.addEventListener("click", () => {
        const selectedPaymentMethod = document.querySelector(
            'input[name="paymentMethod"]:checked'
        ).value;

        // Validate card form if "card" is selected
        if (selectedPaymentMethod === "card") {
            const cardInputs = cardPaymentForm.querySelectorAll("input[required]");
            const isCardValid = Array.from(cardInputs).every(
                (input) => input.value.trim() !== ""
            );
            if (!isCardValid) {
                alert("Please fill in all card details.");
                return;
            }
        }

        // Generate delivery date
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 7);
        deliveryDateElement.textContent = deliveryDate.toDateString();

        // Populate order summary table
        const tbody = document.querySelector("#orderSummaryTable tbody");
        tbody.innerHTML = ""; // Clear previous content
        totalPrice = 0;

        // Iterate over cart items
        for (let id in cart) {
            const { name, quantity, price } = cart[id]; // Price already in LKR
            const row = `
                <tr>
                    <td>${name}</td>
                    <td>${quantity}</td>
                    <td>LKR ${(price * quantity).toFixed(2)}</td>
                </tr>
            `;
            tbody.innerHTML += row;
            totalPrice += price * quantity; // Correct calculation
        }

        // Update total price
        document.getElementById("totalPrice").textContent = `LKR ${totalPrice.toFixed(2)}`;

        // Move to Complete tab
        showTab(2);
    });

    // Back to Pharmacy button
    backToPharmacy.addEventListener("click", () => {
        window.location.href = "pharmacy_page.html";
    });
});
    