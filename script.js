// Array of Objects
const inventory = [
  { name: "MacBook Pro", price: 1200, stock: 5 },
  { name: "Logitech Mouse", price: 50, stock: 10 },
  { name: "iPhone 15", price: 900, stock: 25 },
  { name: "Mechanical Keyboard", price: 120, stock: 15 },
];
let cart = [];
let cartTotal = 0;

//Selecting the HTML elements
const productContainer = document.getElementById("product-container");
const totalBillDisplay = document.getElementById("total-bill");

//Function to show the products
function displayProducts() {
  let htmlContent = "";

  inventory.forEach((item, index) => {
    const isOutOfStock = item.stock === 0;

    const buttonClass = isOutOfStock ? "btn-secondary" : "btn-dark";
    const buttonText = isOutOfStock ? "Out of Stock" : "Add to Cart";
    const disabledAttr = isOutOfStock ? "disabled" : "";
    htmlContent += `
      <div class="col">
        <div class="card h-100 shadow-sm ${isOutOfStock ? "opacity-75" : ""}">
          <div class="card-body text-center">
            <h5 class="card-title">${item.name}</h5>
            <p class="small mb-2 ${isOutOfStock ? "text-danger fw-bold" : "text-muted"}">
                ${isOutOfStock ? "Sold Out" : "In Stock: " + item.stock}
            </p>
            <p class="card-text text-primary fw-bold">${item.price}£</p>
            
            <button onclick="addToCart(${index})" 
                    class="btn ${buttonClass} btn-sm w-100 mt-2" 
                    ${disabledAttr}>
                ${buttonText}
            </button>

            <button onclick="removeCart(${index})" class="btn btn-outline-danger btn-sm w-100 mt-2">
                Remove
            </button>
          </div>
        </div>
      </div>
    `;
  });
  productContainer.innerHTML = htmlContent;
}

function addToCart(index) {
  if (inventory[index].stock > 0) {
    inventory[index].stock--;

    cart.push(inventory[index]);

    cartTotal += inventory[index].price;
    totalBillDisplay.innerText = cartTotal.toFixed(2) + "£";
    displayProducts();
    updateSummary();
  }
}

function removeCart(index) {
  const itemonCartIndex = cart.findIndex(
    (item) => item.name === inventory[index].name,
  );

  if (itemonCartIndex !== -1) {
    cart.splice(itemonCartIndex, 1);
    inventory[index].stock += 1;
    cartTotal -= inventory[index].price;

    totalBillDisplay.innerText = cartTotal.toFixed(2) + "£";
    displayProducts();
    updateSummary();
  } else {
    alert("This item is not in your cart!");
  }
}

function updateSummary() {
  const summaryElement = document.getElementById("cart-summary");
  if (cart.length === 0) {
    summaryElement.innerHTML = `<li class="list-group-item text-muted">Your cart is empty</li>`;
    return;
  }

  const counts = {};
  cart.forEach((item) => {
    counts[item.name] = (counts[item.name] || 0) + 1;
  });

  let summaryHTML = "";
  for (const name in counts) {
    summaryHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${name}
                <span class="badge bg-primary rounded-pill">x${counts[name]}</span>
            </li>
        `;
  }
  summaryElement.innerHTML = summaryHTML;
}

displayProducts();
