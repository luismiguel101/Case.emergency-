let currentSection = 'home';
let selectedIphoneModel = '';
let selectedModel = 'normal';
let cart = [];
let currentSlide = 0;

// Datos de productos
const products = {
    'iPhone 12': {
        'normal': [
            { id: 1, name: 'Transparente Crystal', price: 25, image: "img/12normal/01.jpg" },
            { id: 2, name: 'Negro Mate Premium', price: 32, image: "img/12normal/02.jpg" },
            { id: 3, name: 'Azul Océano', price: 28, image: "img/12normal/03.jpg" },
            { id: 4, name: 'Rosa Pastel', price: 30, image: "img/12normal/04.jpg" },
        ],
        'pro': [
            { id: 5, name: 'Pro Leather Negro', price: 42, emoji: '🖤' },
            { id: 6, name: 'Pro Carbon Fiber', price: 48, emoji: '⚡' },
            { id: 7, name: 'Pro Gold Edition', price: 52, emoji: '👑' },
            { id: 8, name: 'Pro Silver Metal', price: 45, emoji: '💎' }
        ],
        'pro-max': [
            { id: 9, name: 'Max Ultra Shield', price: 58, emoji: '🛡️' },
            { id: 10, name: 'Max Luxury Gold', price: 65, emoji: '👸' },
            { id: 11, name: 'Max Sport Active', price: 55, emoji: '⚽' },
            { id: 12, name: 'Max Crystal Clear', price: 60, emoji: '💫' }
        ]
    },
    'iPhone 13': {
        'normal': [
            { id: 13, name: 'Clear 13 Premium', price: 26, emoji: '🔍' },
            { id: 14, name: 'Purple Dream', price: 34, emoji: '💜' },
            { id: 15, name: 'Green Nature', price: 31, emoji: '💚' },
            { id: 16, name: 'Red Passion', price: 33, emoji: '❤️' }
        ],
        'pro': [
            { id: 17, name: 'Pro 13 Elite', price: 45, emoji: '🎯' },
            { id: 18, name: 'Pro 13 Matte Black', price: 50, emoji: '⚫' },
            { id: 19, name: 'Pro 13 Gradient', price: 53, emoji: '🌈' },
            { id: 20, name: 'Pro 13 Crystal', price: 48, emoji: '💎' }
        ],
        'pro-max': [
            { id: 21, name: 'Max 13 Titanium', price: 62, emoji: '🚀' },
            { id: 22, name: 'Max 13 Armor Pro', price: 68, emoji: '🛡️' },
            { id: 23, name: 'Max 13 Royal', price: 70, emoji: '👸' },
            { id: 24, name: 'Max 13 Thunder', price: 58, emoji: '⚡' }
        ]
    },
    'iPhone 14': {
        'normal': [
            { id: 25, name: 'Clear 14 Ultra', price: 28, emoji: '🔍' },
            { id: 26, name: 'Midnight Black', price: 36, emoji: '⚫' },
            { id: 27, name: 'Sunset Orange', price: 33, emoji: '🌅' },
            { id: 28, name: 'Forest Green', price: 35, emoji: '🌲' }
        ],
        'pro': [
            { id: 29, name: 'Pro 14 Titanium', price: 48, emoji: '🎯' },
            { id: 30, name: 'Pro 14 Ceramic', price: 53, emoji: '⚡' },
            { id: 31, name: 'Pro 14 Sapphire', price: 56, emoji: '💎' },
            { id: 32, name: 'Pro 14 Matrix', price: 50, emoji: '🔮' }
        ],
        'pro-max': [
            { id: 33, name: 'Max 14 Quantum', price: 65, emoji: '🚀' },
            { id: 34, name: 'Max 14 Fortress', price: 70, emoji: '🛡️' },
            { id: 35, name: 'Max 14 Diamond', price: 75, emoji: '👸' },
            { id: 36, name: 'Max 14 Storm', price: 63, emoji: '⚡' }
        ]
    },
    'iPhone 15': {
        'normal': [
            { id: 37, name: 'Clear 15 Pro', price: 30, emoji: '🔍' },
            { id: 38, name: 'Obsidian Black', price: 38, emoji: '⚫' },
            { id: 39, name: 'Aurora Blue', price: 35, emoji: '🌌' },
            { id: 40, name: 'Coral Pink', price: 37, emoji: '🪸' }
        ],
        'pro': [
            { id: 41, name: 'Pro 15 Nexus', price: 50, emoji: '🎯' },
            { id: 42, name: 'Pro 15 Phantom', price: 55, emoji: '⚡' },
            { id: 43, name: 'Pro 15 Cosmos', price: 58, emoji: '🌟' },
            { id: 44, name: 'Pro 15 Prism', price: 53, emoji: '💎' }
        ],
        'pro-max': [
            { id: 45, name: 'Max 15 Infinity', price: 68, emoji: '🚀' },
            { id: 46, name: 'Max 15 Gladiator', price: 72, emoji: '🛡️' },
            { id: 47, name: 'Max 15 Emperor', price: 78, emoji: '👸' },
            { id: 48, name: 'Max 15 Lightning', price: 65, emoji: '⚡' }
        ]
    },
    'iPhone 16': {
        'normal': [
            { id: 49, name: 'Clear 16 Future', price: 32, emoji: '🔍' },
            { id: 50, name: 'Space Black', price: 40, emoji: '⚫' },
            { id: 51, name: 'Galaxy Purple', price: 37, emoji: '🌌' },
            { id: 52, name: 'Ocean Teal', price: 39, emoji: '🌊' }
        ],
        'pro': [
            { id: 53, name: 'Pro 16 Apex', price: 52, emoji: '🎯' },
            { id: 54, name: 'Pro 16 Shadow', price: 57, emoji: '⚡' },
            { id: 55, name: 'Pro 16 Nova', price: 60, emoji: '🌟' },
            { id: 56, name: 'Pro 16 Elite', price: 55, emoji: '💎' }
        ],
        'pro-max': [
            { id: 57, name: 'Max 16 Ultimate', price: 70, emoji: '🚀' },
            { id: 58, name: 'Max 16 Titan', price: 75, emoji: '🛡️' },
            { id: 59, name: 'Max 16 Sovereign', price: 80, emoji: '👸' },
            { id: 60, name: 'Max 16 Volt', price: 68, emoji: '⚡' }
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
                <p>¡Agrega algunas fundas increíbles!</p>
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
            
            let message = "¡Hola! Me interesa comprar las siguientes fundas:\n\n";
            let total = 0;
            
            const modelNames = {
                'normal': 'Normal',
                'pro': 'Pro',
                'pro-max': 'Pro Max'
            };
            
            cart.forEach(item => {
                total += item.price * item.quantity;
                message += `📱 ${ item.name } \n`;
                message += `   ${ item.generation } ${ modelNames[item.model] } \n`;
                message += `   S / ${ item.price } x ${ item.quantity } = S / ${ item.price * item.quantity } \n\n`;
            });
            
            message += `💰 Total: S / ${ total } \n\n`;
            message += "¿Podrían confirmar disponibilidad y coordinar la entrega?";
            
            const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    function contactWhatsApp() {
        const message = "¡Hola! Me gustaría conocer más sobre sus fundas para iPhone. ¿Podrían ayudarme?";
        const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(message)}`;
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