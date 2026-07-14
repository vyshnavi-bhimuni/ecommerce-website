window.onload = function() {
    alert("Welcome to ECommerce!");
};

document.querySelectorAll('.category-section li').forEach(item => {
    item.addEventListener('mouseover', () => {
        console.log("Hovered on: " + item.textContent.trim());
    });
});
let cart = [];

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        const product = this.getAttribute("data-product");
        cart.push(product);
        alert(`${product} added to cart. Total items: ${cart.length}`);
    });
});