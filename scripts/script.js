document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Sneakers', price: 500000, image: 'images/sneaker.jpg' },
        { name: 'Nike', price: 750000, image: 'images/nike.jpg' },
        { name: 'Vans', price: 150000, image: 'images/vans.jpg' }
    ];

    const productList = document.querySelector('.product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="150">
            <h3>${product.name}</h3>
            <p>Harga: Rp${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})"><i class="fas fa-cart-plus"></i> Tambah ke Keranjang</button>
        `;
        productList.appendChild(productItem);
    });
});

function addToCart(name, price) {
    alert(`${name} dengan harga Rp${price} telah ditambahkan ke keranjang.`);
}
