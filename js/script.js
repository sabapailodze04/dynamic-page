const container = document.querySelector("#product-container");
const loadingText = document.querySelector("#loading");
let url = "https://fakestoreapi.com/products";

fetch(url)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    return response.json();
  })
  .then(function (products) {
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="info">
              <h2>${product.title}</h2>
              <p>$${product.price}</p>
            </div>
          `;

      card.addEventListener("click", function () {
        window.location.href = `pages/product.html?id=${product.id}`;
      });
      container.appendChild(card);
    });
    container.style.display = "grid";
    loadingText.style.display = "none";
  })
  .catch(function (error) {
    console.error("error fetching products", error);
  });
