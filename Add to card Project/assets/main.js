const products = [
    {
        id: 1,
        img: "images/p1.jpg",  
        name: "Rolex Submariner Watch",
        price: 125000
    },
    {
        id: 2,
        img: "images/p2.png",
        name: "Casio G-Shock Watch",
        price: 5000
    },
    {
        id: 3,
        img: "images/p3.jpg",  
        name: "Seiko 5 Automatic Watch",
        price: 8000
    },
    {
        id: 4,
        img: "images/p4.png",  
        name: "Omega Seamaster Watch",
        price: 300000
    },
    {
        id: 5,
        img: "images/p5.png", 
        name: "Fossil Hybrid HR Watch",
        price: 12000
    },
    {
        id: 6,
        img: "images/p6.png" ,
        name: "Tag Heuer Monaco Watch",
        price: 250000
    }
];

const productsDiv = document.getElementById('products');
const cartItemsDiv = document.getElementById('cartItems');
const totalDiv = document.getElementById('total');
const cartBtn = document.getElementById('cart');

let cart = [];
let total = 0;

products.forEach(product => {
    productsDiv.innerHTML += `
        <div class="product">
            <img src="${product.img}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>₹${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
});

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    total += product.price;
    updateCart();
}

function updateCart() {
    cartItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.img}" alt="${item.name}" width="50">
            <p>${item.name} - ₹${item.price.toLocaleString()}</p>
        </div>
    `).join('');
    totalDiv.innerText = `Total: ₹${total.toLocaleString()}`;
    cartBtn.innerText = `Cart (${cart.length})`;
}
     