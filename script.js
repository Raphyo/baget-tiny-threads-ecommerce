// ==================== SHOPPING CART MANAGEMENT ====================

// Cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Payment links from Stripe
const paymentLinks = {
    basic: 'https://buy.stripe.com/test_dRm6oJ40Ndmz27n1Hj4wM0c',
    essentials: 'https://buy.stripe.com/test_bJeeVfgNzdmz5jz85H4wM0d',
    complete: 'https://buy.stripe.com/test_fZueVffJvaaneU985H4wM0e'
};

// Shipping rates
const shippingRates = {
    US: { base: 5.99, free: 50 },
    CA: { base: 7.99, free: 75 },
    UK: { base: 9.99, free: 75 },
    AU: { base: 14.99, free: 100 },
    Other: { base: 19.99, free: 150 }
};

// Tax rates by country
const taxRates = {
    US: 0.08,
    CA: 0.13,
    UK: 0.20,
    AU: 0.10,
    Other: 0.00
};

// ==================== UTILITY FUNCTIONS ====================

function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function generateOrderNumber() {
    return 'TT-' + Date.now().toString().slice(-6);
}

// ==================== PRODUCT DISPLAY ====================

function renderProducts(productsToRender = products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.category = product.category;
        
        card.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-category">${categories[product.category].name}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-sizes">
                    ${product.sizes.map(size => `
                        <button class="size-option" data-size="${size}">${size}</button>
                    `).join('')}
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        `;

        grid.appendChild(card);
    });

    // Attach event listeners
    attachProductListeners();
}

function attachProductListeners() {
    document.querySelectorAll('.product-card').forEach(card => {
        const sizeButtons = card.querySelectorAll('.size-option');
        const addBtn = card.querySelector('.add-to-cart-btn');

        sizeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                sizeButtons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            });
        });

        addBtn.addEventListener('click', () => {
            const productId = parseInt(addBtn.dataset.productId);
            const selected = card.querySelector('.size-option.selected');
            
            if (!selected) {
                alert('Please select a size');
                return;
            }

            addToCart(productId, selected.dataset.size);
        });
    });
}

function addToCart(productId, size) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId && item.size === size);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            emoji: product.emoji,
            size: size,
            quantity: 1
        });
    }

    saveCart();
    updateCartDisplay();
    showCartNotification();
}

function showCartNotification() {
    // Simple notification
    const btn = document.getElementById('cartBtn');
    btn.style.animation = 'none';
    setTimeout(() => {
        btn.style.animation = 'pulse 0.5s ease';
    }, 10);
}

// ==================== CART DISPLAY ====================

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        updateTotals();
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-image">${item.emoji}</div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-size">Size: ${item.size}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="updateQuantity(${index}, -1)">−</button>
                    <input type="number" class="qty-input" value="${item.quantity}" 
                           onchange="setQuantity(${index}, this.value)">
                    <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${index})">🗑️</button>
                </div>
            </div>
        </div>
    `).join('');

    updateTotals();
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
        return;
    }
    saveCart();
    updateCartDisplay();
}

function setQuantity(index, value) {
    const qty = parseInt(value);
    if (qty <= 0) {
        removeFromCart(index);
        return;
    }
    cart[index].quantity = qty;
    saveCart();
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartDisplay();
}

function updateTotals(country = 'US') {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= (shippingRates[country]?.free || 50) ? 0 : (shippingRates[country]?.base || 5.99);
    const tax = subtotal * (taxRates[country] || 0);
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('shipping').textContent = formatPrice(shipping);
    document.getElementById('tax').textContent = formatPrice(tax);
    document.getElementById('total').textContent = formatPrice(total);

    document.getElementById('checkoutSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('checkoutShipping').textContent = formatPrice(shipping);
    document.getElementById('checkoutTax').textContent = formatPrice(tax);
    document.getElementById('checkoutTotal').textContent = formatPrice(total);
}

// ==================== CART MODAL ====================

const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const continueShopping = document.getElementById('continueShopping');

cartBtn.addEventListener('click', () => {
    cartModal.classList.add('active');
    updateCartDisplay();
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

continueShopping.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('active');
    }
});

// ==================== FILTERING ====================

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        if (filter === 'all') {
            renderProducts(products);
        } else {
            const filtered = products.filter(p => p.category === filter);
            renderProducts(filtered);
        }
    });
});

// ==================== FAQ TOGGLE ====================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const parent = question.parentElement;
        const isActive = parent.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-answer').style.display = 'none';
        });

        if (!isActive) {
            parent.classList.add('active');
            parent.querySelector('.faq-answer').style.display = 'block';
        }
    });
});

// ==================== CHECKOUT ====================

const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutSection = document.getElementById('checkout');
const confirmationSection = document.getElementById('confirmation');
const checkoutForm = document.getElementById('checkoutForm');
const backToCartBtn = document.getElementById('backToCart');

checkoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    cartModal.classList.remove('active');
    checkoutSection.style.display = 'block';
    confirmationSection.style.display = 'none';
    window.location.hash = '#checkout';
    updateCheckoutDisplay();
});

backToCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkoutSection.style.display = 'none';
    cartModal.classList.add('active');
});

function updateCheckoutDisplay() {
    const countrySelect = document.getElementById('country');
    const items = document.getElementById('checkoutItems');
    
    items.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <div class="checkout-item-name">
                ${item.name} (${item.size}) x${item.quantity}
            </div>
            <div class="checkout-item-price">
                ${formatPrice(item.price * item.quantity)}
            </div>
        </div>
    `).join('');

    // Update totals when country changes
    if (countrySelect) {
        countrySelect.addEventListener('change', () => {
            updateTotals(countrySelect.value);
        });
    }

    updateTotals('US');
}

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;

    if (!fullName || !email || !country) {
        alert('Please fill in all required fields');
        return;
    }

    // Simulate order processing
    processOrder(fullName, email);
});

function processOrder(fullName, email) {
    const orderNumber = generateOrderNumber();
    
    // Store order data
    const order = {
        number: orderNumber,
        email: email,
        customer: fullName,
        items: cart,
        total: calculateTotal(),
        date: new Date().toISOString()
    };

    // Save to localStorage
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart
    cart = [];
    saveCart();

    // Show confirmation
    document.getElementById('orderNumber').textContent = orderNumber;
    document.getElementById('confirmEmail').textContent = email;

    checkoutSection.style.display = 'none';
    confirmationSection.style.display = 'block';
    window.location.hash = '#confirmation';
}

function calculateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 50 ? 0 : 5.99;
    const tax = subtotal * 0.08;
    return subtotal + shipping + tax;
}

// ==================== HAMBURGER MENU ====================

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==================== NAVIGATION ====================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#checkout' || href === '#confirmation' || href === '#account') {
            // Handle special sections
            if (href === '#account') {
                alert('Account login would open here. For MVP, orders are stored in browser.');
            }
        }
    });
});

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartDisplay();
    updateCartCount();

    // Add CSS animation for pulse effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);

    // Smooth scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// ==================== ADMIN DASHBOARD (SIMPLE) ====================

// Access admin data with: window.showAdminDashboard()
window.showAdminDashboard = function() {
    const dashboard = {
        totalProducts: products.length,
        productsByCategory: {},
        totalOrders: JSON.parse(localStorage.getItem('orders'))?.length || 0,
        cartItems: cart
    };

    // Count by category
    products.forEach(product => {
        const cat = product.category;
        dashboard.productsByCategory[cat] = (dashboard.productsByCategory[cat] || 0) + 1;
    });

    console.log('=== ADMIN DASHBOARD ===');
    console.log('Total Products:', dashboard.totalProducts);
    console.log('Products by Category:', dashboard.productsByCategory);
    console.log('Total Orders:', dashboard.totalOrders);
    console.log('Orders:', JSON.parse(localStorage.getItem('orders')));
    console.log('Current Cart:', cart);
    console.log('======================');

    return dashboard;
};

// ==================== TRACKING (SIMPLE ORDER TRACKING) ====================

window.trackOrder = function(orderNumber) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(o => o.number === orderNumber);

    if (order) {
        console.log('Order Found:', order);
        console.log('Status: Processing');
        console.log('Estimated Delivery: 5-7 business days');
        return order;
    } else {
        console.log('Order not found');
        return null;
    }
};

// ==================== INVENTORY MANAGEMENT ====================

window.getInventory = function() {
    const inventory = {};
    products.forEach(product => {
        inventory[product.sku] = {
            name: product.name,
            quantity: product.inventory,
            category: product.category
        };
    });
    console.log('Current Inventory:', inventory);
    return inventory;
};

window.updateInventory = function(sku, quantity) {
    const product = products.find(p => p.sku === sku);
    if (product) {
        product.inventory = quantity;
        console.log(`Updated ${product.name} inventory to ${quantity}`);
    }
};
