const products = [
    { id: 1, name: "Slim Fit Shirt", price: 1500, size: "M", img: "https://via.placeholder.com/250?text=Shirt1" },
    { id: 2, name: "Casual Trousers", price: 2000, size: "L", img: "https://via.placeholder.com/250?text=Trousers1" },
    // Add 18 more products here, e.g., { id: 3, name: "Jacket", price: 3000, size: "XL", img: "..." } – repeat for 20 total
    { id: 3, name: "Formal Jacket", price: 3000, size: "XL", img: "https://via.placeholder.com/250?text=Jacket1" },
    { id: 4, name: "Polo Shirt", price: 1200, size: "S", img: "https://via.placeholder.com/250?text=Polo1" },
    { id: 5, name: "Denim Jeans", price: 2500, size: "M", img: "https://via.placeholder.com/250?text=Jeans1" },
    { id: 6, name: "Cotton T-Shirt", price: 800, size: "L", img: "https://via.placeholder.com/250?text=TShirt1" },
    { id: 7, name: "Blazer", price: 4000, size: "XL", img: "https://via.placeholder.com/250?text=Blazer1" },
    { id: 8, name: "Chinos", price: 1800, size: "M", img: "https://via.placeholder.com/250?text=Chinos1" },
    { id: 9, name: "Sweater", price: 2200, size: "L", img: "https://via.placeholder.com/250?text=Sweater1" },
    { id: 10, name: "Shorts", price: 1000, size: "S", img: "https://via.placeholder.com/250?text=Shorts1" },
    { id: 11, name: "Vest", price: 900, size: "M", img: "https://via.placeholder.com/250?text=Vest1" },
    { id: 12, name: "Cargo Pants", price: 1600, size: "L", img: "https://via.placeholder.com/250?text=Cargo1" },
    { id: 13, name: "Hoodie", price: 1900, size: "XL", img: "https://via.placeholder.com/250?text=Hoodie1" },
    { id: 14, name: "Tie", price: 500, size: "One Size", img: "https://via.placeholder.com/250?text=Tie1" },
    { id: 15, name: "Belt", price: 700, size: "One Size", img: "https://via.placeholder.com/250?text=Belt1" },
    { id: 16, name: "Socks Pack", price: 400, size: "One Size", img: "https://via.placeholder.com/250?text=Socks1" },
    { id: 17, name: "Cap", price: 600, size: "One Size", img: "https://via.placeholder.com/250?text=Cap1" },
    { id: 18, name: "Wallet", price: 800, size: "One Size", img: "https://via.placeholder.com/250?text=Wallet1" },
    { id: 19, name: "Watch", price: 2500, size: "One Size", img: "https://via.placeholder.com/250?text=Watch1" },
    { id: 20, name: "Shoes", price: 3500, size: "10", img: "https://via.placeholder.com/250?text=Shoes1" }
];

let cart = [];
const productsContainer = document.getElementById('products');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartModal = document.getElementById('cart-modal');
const checkoutModal = document.getElementById('checkout-modal');

function displayProducts(prods) {
    productsContainer.innerHTML = '';
    prods.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price} | Size: ${p.size}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(div);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    cartCount.textContent = cart.length;
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });
}

document.getElementById('cart-btn').onclick = () => cartModal.style.display = 'block';
document.getElementById('checkout-btn').onclick = () => { cartModal.style.display = 'none'; checkoutModal.style.display = 'block'; };
document.querySelectorAll('.close').forEach(c => c.onclick = () => { cartModal.style.display = 'none'; checkoutModal.style.display = 'none'; });
document.getElementById('checkout-form').onsubmit = (e) => { e.preventDefault(); alert('Order placed!'); checkoutModal.style.display = 'none'; cart = []; updateCart(); cartCount.textContent = '0'; };

// Filters
document.getElementById('filter-size').onclick = () => displayProducts(products.filter(p => p.size === 'M')); // Example: Filter to M
document.getElementById('filter-price').onclick = () => displayProducts(products.filter(p => p.price < 2000));

displayProducts(products); // Load all initially
