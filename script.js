// Array of Objects
const inventory = [
  { name: "MacBook Pro", price: 1200, stock: 5 },
  { name: "Logitech Mouse", price: 50, stock: 10 },
  { name: "Logitech Mouse", price: 50, stock: 25 },
  { name: "Mechanical Keyboard", price: 120, stock: 15 },
];

//Selecting the HTML elements
const productContainer = document.getElementById("product-container");
const totalBillDisplay = document.getElementById("total-bill");

//Function to show the products
function displayInventory() {
  let totalValue = 0;
  let htmlContent = "";

  inventory.forEach((item) => {
    totalValue += item.price * item.stock;

    //creating the HTML for each card
    htmlContent += `
     <div class="col">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="text-muted small mb-2">In Stock: ${item.stock}</p>
                        <p class="card-text text-primary fw-bold">${item.price}£</p>
                        <button class="btn btn-dark btn-sm w-100 mt-2">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
  });
}