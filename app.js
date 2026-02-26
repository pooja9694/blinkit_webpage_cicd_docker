let cart = JSON.parse(localStorage.getItem("cart")) || [];

function shopNow() {
  window.location.href = "category.html";
}

function openCategory(cat) {
  localStorage.setItem("category", cat);
  window.location.href = "category.html";
}

function viewProduct(name, price) {
  localStorage.setItem("product", JSON.stringify({ name, price }));
  window.location.href = "product.html";
}

function addToCart() {
  let product = JSON.parse(localStorage.getItem("product"));
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

if (document.getElementById("productName")) {
  let product = JSON.parse(localStorage.getItem("product"));
  document.getElementById("productName").innerText = product.name;
  document.getElementById("productPrice").innerText = "₹" + product.price;
}

if (document.getElementById("cartList")) {
  let list = document.getElementById("cartList");
  cart.forEach(p => {
    let li = document.createElement("li");
    li.innerText = `${p.name} - ₹${p.price}`;
    list.appendChild(li);
  });
}