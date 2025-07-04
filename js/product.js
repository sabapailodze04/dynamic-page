const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("network not found");
    }
    return response.json();
  })
  .then(function (data) {});
document.querySelector("#product-title").textContent = data.tittle;

document.querySelector("#product-description").textContent = data.description;
if (!productId) {
  document.body.innerHTML = "<H1>ver moidzebna dzma<H1/>";
}
