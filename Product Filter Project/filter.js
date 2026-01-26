// 1. Select the search box
const searchBox = document.getElementById("searchBox"); // your code

// 2. Select all products
const products = document.querySelectorAll(".product"); // your code (hint: querySelectorAll)

// 3. Listen for typing in the search box
searchBox.addEventListener("input", function () {
  // 4. Get what user typed
  const searchTerm = searchBox.value.toLowerCase();
  console.log("Searching for:", searchTerm);

  // 5. Loop through each product
  products.forEach((product) => {
    // 6. Get the product name from data-name attribute
    const productName = product.getAttribute("data-name"); // your code (hint: getAttribute)
    console.log("Product name:", productName);

    // 7. Check if product name includes search term
    if (productName.includes(searchTerm)) {
      // Show product
      product.classList.remove("hidden");
    } else {
      // Hide product
      product.classList.add("hidden");
    }
  });
});
