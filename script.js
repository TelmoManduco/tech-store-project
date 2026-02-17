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
    //creating the HTML for each card
    htmlContent += `
      <div class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <h5 class="card-title">${item.name}</h5>
            <p class="text-muted small mb-2">In Stock: ${item.stock}</p>
            <p class="card-text text-primary fw-bold">${item.price}£</p>
            <button onclick="addToCart(${index})" class="btn btn-dark btn-sm w-100 mt-2">
               Add to Cart
            </button>
               <button onclick="removeCart(${index})" class="btn btn-dark btn-sm w-100 mt-2">
               Remove From Cart
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
  }
}

function removeCart(index) {
  const itemonCartIndex = cart.findIndex(
    (item) => item.name === inventory[index].name,
  );

  if (itemonCartIndex !== -1) {
  }
}

displayProducts();
