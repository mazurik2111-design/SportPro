const filter = document.getElementById("filter");
const products = document.querySelectorAll(".product-card");

filter.addEventListener("change", () => {
    const category = filter.value;

    products.forEach(p => {
        if (category === "all" || p.dataset.category === category) {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });
});

// ===== Модальне вікно =====
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.getElementById("close-modal");
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "flex";
        modalTitle.innerText = "Купити: " + btn.dataset.product;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});