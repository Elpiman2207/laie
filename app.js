
// Cargar productos desde el archivo JSON
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const productGrid = document.getElementById('product-grid');
        data.products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button>Comprar Ahora</button>
            `;
            productGrid.appendChild(productCard);
        });
    })
    .catch(error => {
        console.error('Error al cargar los productos:', error);
    });
