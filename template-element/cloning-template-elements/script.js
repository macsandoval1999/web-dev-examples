// In this example, we will clone a template element for each product in a product list and populate it with data.
// Array of product objects
const products = [
    {
        name: "Wireless Headphones",
        description: "Noise-cancelling, over-ear Bluetooth headphones.",
        price: "$99.99",
        image: "https://placehold.co/200x100?text=Headphones"
    },
    {
        name: "Smart Watch",
        description: "Track your fitness and stay connected.",
        price: "$149.99",
        image: "https://placehold.co/200x100?text=Smart Watch"
    },
    {
        name: "Portable Charger",
        description: "10,000mAh power bank with fast charging.",
        price: "$29.99",
        image: "https://placehold.co/200x100?text=Charger"
    }
];



// Get references to the template and the container where products will be added
const template = document.getElementById("product-card"); // template element with id "product-card"
const productList = document.getElementById("product-list"); // container div with id "product-list"

// Loop through the products array and clone the template for each product
products.forEach((product) => { //for each product in products array...
    const clone = template.content.cloneNode(true); // access the template's content and clone it deeply (true), meaning even nested elements are cloned.
    const [title, desc, price, img] = clone.querySelectorAll("h2, p, p, img"); // access the clones nested elements using querySelectorAll and destructure them into variables. Now you have four variables: title, desc, price, img.

    // Populate the cloned elements with product data
    title.textContent = product.name;
    desc.textContent = product.description;
    price.textContent = product.price;
    img.src = product.image;
    img.alt = product.name;

    // Append the populated clone to the product list container
    productList.appendChild(clone);
});
