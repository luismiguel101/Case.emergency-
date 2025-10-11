let currentSection = 'home';
let selectedIphoneModel = '';
let selectedModel = 'normal';
let cart = [];
let currentSlide = 0;

// Datos de productos
const products = {
    'iPhone 12': {
        'normal': [
            { id: 1, name: 'Estrellas Brillantes', price: 25, image: "img/12normal/01.jpg" },
            { id: 2, name: 'Plomo', price: 28, image: "img/12normal/02.jpg" },
            { id: 3, name: 'Océano Rosa', price: 25, image: "img/12normal/03.jpg" },
            { id: 4, name: 'Rosa Pastel C/Espejo', price: 25, image: "img/12normal/04.jpg" },
        ],
        'pro': [
            { id: 5, name: 'Mr. Franklin', price: 25, image: "img/12pro/01.jpg" },
            { id: 6, name: 'Coral Azul', price: 25, image: "img/12pro/02.jpg" },
            { id: 7, name: 'Vino Tinto', price: 25, image: "img/12pro/03.jpg" },
            { id: 8, name: 'Chrome heart', price: 25, image: "img/12pro/04.jpg" },
        ],
        'pro-max': [
            { id: 9, name: 'Blue mountain', price: 25, image: "img/12promax/01.jpg" },
            { id: 10, name: 'Corazón brillante', price: 25, image: "img/12promax/02.jpg" },
            { id: 11, name: 'Future', price: 25, image: "img/12promax/03.jpg" },
        ]
    },
    'iPhone 13': {
        'normal': [
            { id: 12, name: 'Red kisses', price: 25, image: "img/13normal/01.jpg" },
        ],

        'pro': [
            { id: 13, name: 'Floricienta', price: 25, image: "img/13pro/01.jpg" },
            { id: 14, name: 'Kisses', price: 25, image: "img/13pro/02.jpg" },
            { id: 15, name: 'Silver', price: 28, image: "img/13pro/03.jpg" },
            { id: 16, name: 'Batman', price: 25, image: "img/13pro/04.jpg" },
            { id: 17, name: 'Relieve rosa', price: 25, image: "img/13pro/05.jpg" },
        ],
        'pro-max': [
            { id: 18, name: 'Mr. Franklin', price: 25, image: "img/13promax/01.jpg" },
            { id: 19, name: 'Corazón turco', price: 25, image: "img/13promax/02.jpg" },
            { id: 20, name: 'Chrome heart', price: 25, image: "img/13promax/03.jpg" },
            { id: 21, name: 'Leopardo', price: 25, image: "img/13promax/04.jpg" },
        ]
    },
    'iPhone 14': {
        'normal': [
            { id: 22, name: 'Beach', price: 28, image: "img/14normal/01.jpg" },
        ],
        'pro': [
            { id: 23, name: 'Blue mountain', price: 25, image: "img/14pro/01.jpg" },
            { id: 24, name: 'Red kisses', price: 25, image: "img/14pro/02.jpg" },
            { id: 25, name: 'Vino Tinto', price: 25, image: "img/14pro/03.jpg" },
            { id: 26, name: 'Love', price: 25, image: "img/14pro/04.jpg" },
            { id: 27, name: '+18', price: 25, image: "img/14pro/05.jpg" },
        ],
        'pro-max': [
            { id: 28, name: 'Marvel', price: 25, image: "img/14promax/01.jpg" },
            { id: 29, name: 'Silver blue', price: 28, image: "img/14promax/02.jpg" },
            { id: 30, name: 'Olas', price: 25, image: "img/14promax/03.jpg" },
            { id: 31, name: 'Corazón turco', price: 25, image: "img/14promax/04.jpg" },
            { id: 32, name: 'Future', price: 25, image: "img/14promax/05.jpg" },
        ]
    },
    'iPhone 15': {
        'normal': [
            { id: 33, name: 'Bola 8', price: 25, image: "img/15normal/01.jpg" },
            { id: 34, name: 'Corazones rosas', price: 25, image: "img/15normal/02.jpg" },
            { id: 35, name: 'Marvel', price: 25, image: "img/15normal/03.jpg" },
            { id: 36, name: 'Coral Azul', price: 25, image: "img/15normal/04.jpg" },
            { id: 37, name: 'Lazos Brillantes', price: 25, image: "img/15normal/05.jpg" },
        ],
        'pro': [
            { id: 38, name: 'Silver blue', price: 28, image: "img/15pro/01.jpg" },
            { id: 39, name: 'Olas', price: 25, image: "img/15pro/02.jpg" },
            { id: 40, name: 'Beach', price: 25, image: "img/15pro/03.jpg" },
            { id: 41, name: 'Love', price: 25, image: "img/15pro/04.jpg" },
            { id: 42, name: 'Leopardo', price: 25, image: "img/15pro/05.jpg" },
        ],
        'pro-max': [
            { id: 43, name: 'Rosa Pastel C/Espejo', price: 25, image: "img/15promax/01.jpg" },
            { id: 44, name: '+18', price: 25, image: "img/15promax/02.jpg" },

        ]
    },
    'iPhone 16': {
        'normal': [
            { id: 45, name: 'Estrellas Brillantes', price: 25, image: "img/16normal/01.jpg" },
            { id: 46, name: 'Batman', price: 25, image: "img/16normal/02.jpg" },

        ],
        'pro': [
            { id: 47, name: 'Bola 8 ', price: 25, image: "img/16pro/01.jpg" },
            { id: 48, name: 'Floricienta', price: 25, image: "img/16pro/02.jpg" },
            { id: 49, name: 'Corazones rosas', price: 25, image: "img/16pro/03.jpg" },
            { id: 50, name: 'Kisses', price: 25, image: "img/16pro/04.jpg" },
        ],

        'pro-max': [
            { id: 51, name: 'Corazón brillante', price: 25, image: "img/16promax/01.jpg" },
        ]
    }
};

// Funciones de navegación
function showHome() {
    hideAllSections();
    document.getElementById('home').style.display = 'block';
    currentSection = 'home';
}

function showCatalog() {
    hideAllSections();
    document.getElementById('catalog').classList.add('active');
    currentSection = 'catalog';
}

function showContact() {
    hideAllSections();
    document.getElementById('contact').classList.remove('hidden');
    currentSection = 'contact';
}

function showAbout() {
    hideAllSections();
    document.getElementById('about').classList.remove('hidden');
    currentSection = 'about';
}

function hideAllSections() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('catalog').classList.remove('active');
    document.getElementById('modelSelection').classList.remove('active');
    document.getElementById('contact').classList.add('hidden');
    document.getElementById('about').classList.add('hidden');
}

// Funciones del menú
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('active');
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', function (e) {
    const menu = document.getElementById('dropdownMenu');
    const toggle = document.querySelector('.menu-toggle');
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// Funciones del carrusel
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const carousel = document.getElementById('carousel');
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Actualizar dots
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

// Auto-slide del carrusel
setInterval(() => {
    currentSlide = (currentSlide + 1) % 4;
    goToSlide(currentSlide);
}, 4000);

// Funciones de selección de iPhone
function selectIphone(iphoneModel) {
    selectedIphoneModel = iphoneModel;

    // Actualizar UI
    document.querySelectorAll('.iphone-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.target.closest('.iphone-card').classList.add('selected');

    // Mostrar selección de modelos
    setTimeout(() => {
        hideAllSections();
        document.getElementById('modelSelection').classList.add('active');
        document.getElementById('selectedIphone').textContent = iphoneModel;
        loadProducts();
        currentSection = 'models';
    }, 300);
}

function selectModel(model) {
    selectedModel = model;

    // Actualizar botones
    document.querySelectorAll('.model-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    loadProducts();
}

function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const productList = products[selectedIphoneModel][selectedModel];

    productsGrid.innerHTML = '';

    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image"/>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">S/${product.price}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Agregar al Carrito
                    </button>
                `;
        productsGrid.appendChild(productCard);
    });
}

// Funciones del carrito
function addToCart(productId) {
    // Buscar el producto
    let product = null;
    for (let generation in products) {
        for (let model in products[generation]) {
            product = products[generation][model].find(p => p.id === productId);
            if (product) {
                product.generation = generation;
                product.model = model;
                break;
            }
        }
        if (product) break;
    }

    if (product) {
        // Verificar si ya está en el carrito
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        updateCartCount();
        showCartAnimation();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function showCartAnimation() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.toggle('active');
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛍️</div>
                <h3>Tu carrito está vacío</h3>
                <p>¡Descubre productos únicos y con estilo!</p>
            </div>
        `;
        cartTotal.style.display = 'none';
    } else {
        let total = 0;
        cartItems.innerHTML = cart.map(item => {
            total += item.price * item.quantity;
            const modelNames = {
                'normal': 'Normal',
                'pro': 'Pro',
                'pro-max': 'Pro Max'
            };
            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image"/>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-details">${item.generation} ${modelNames[item.model]}</div>
                        <div class="cart-item-price">S/${item.price} x ${item.quantity}</div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
            `;
        }).join('');

        document.getElementById('totalAmount').textContent = `Total: S/${total}`;
        cartTotal.style.display = 'block';
    }
}

// Funciones de WhatsApp
function finalizePurchase() {
    if (cart.length === 0) return;

    let message = "Hola, me gustaría ordenar los siguientes modelos:\n\n";
    let total = 0;

    const modelNames = {
        'normal': 'Normal',
        'pro': 'Pro',
        'pro-max': 'Pro Max'
    };

     cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        
        total += item.price * item.quantity;
        message += `#${item.id} - ${item.name}\n`;
        message += `• Precio: S/ ${item.price}\n`;
        message += `• Generación: ${item.generation}\n`;
        message += `• Modelo: ${modelNames[item.model]}\n`;
        message += `• Cantidad:  ${item.quantity}\n`;
        message += `-----------------------------------\n`;
    });

    message += `💰 *Total:* S/ ${total}\n\n`;
    message += "🛵 *Dirección de entrega:* (escribe aquí tu dirección)\n";
    message += "💳 *Método de pago:* (Yape / Plin / Efectivo)\n\n";
   
    const whatsappUrl = `https://wa.me/51962314578?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function contactWhatsApp() {
    const message = "¡Hola! Me gustaría conocer más sobre sus fundas para iPhone. ¿Podrían ayudarme?";
    const whatsappUrl = `https://wa.me/51962314578?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Cerrar modal al hacer clic fuera
document.getElementById('cartModal').addEventListener('click', function (e) {
    if (e.target === this) {
        toggleCart();
    }
});

// Inicialización
document.addEventListener('DOMContentLoaded', function () {
    showHome();
    updateCartCount();
});