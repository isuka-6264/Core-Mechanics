/* main.js */

'use strict';

// FOOTER
document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer">
        <div class="container footer-inner">
            <div class="footer-brand">
                <span class="logo">CORE<span>MECHANICS</span></span>
                <p>Premium auto parts & performance upgrades. Not a dealership -- a garage.</p>
            </div>
            <div></div>
            <div class="footer-links">
                <h4>Navigation</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="catalog.html">Catalog</a></li>
                    <li><a href="catalog-item.html">Featured Item</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Policy</h4>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Shipping Info</a></li>
                    <li><a href="#">Returns</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 CORE MECHANICS. All rights reserved.</p>
        </div>
    </footer>
`);


/* PRODUCT */
const products = [
  {
    id: 'p01',
    name: 'Garrett GT3582R Turbocharger',
    brand: 'Garrett',
    category: 'engine',
    price: 96649,
    image: './images/thumbnails/Garrett GT3582R Turbocharger.jpg',
    description: 'Ball bearing turbocharger, 700whp capable, T3/T4 divided housing.'
  },
  {
    id: 'p02',
    name: 'HKS Hi-Power Exhaust System',
    brand: 'HKS',
    category: 'exhaust',
    price: 53319,
    image: './images/thumbnails/HKS Hi-Power Exhaust System.webp',
    description: 'Stainless 76mm cat-back system with polished dual tips.'
  },
  {
    id: 'p03',
    name: 'KW Coilover Kit V3',
    brand: 'KW Suspension',
    category: 'suspension',
    price: 143159,
    image: './images/thumbnails/KW Coilover Kit V3.jpg',
    description: 'Fully adjustable compression & rebound, 50–100mm lowering range.'
  },
  {
    id: 'p04',
    name: 'Voltex Type-5 Front Splitter',
    brand: 'Voltex',
    category: 'bodykit',
    price: 40239,
    image: './images/thumbnails/Voltex Type-5 Front Splitter.webp',
    description: 'Carbon fibre aero splitter with adjustable lip. Aggressive downforce.'
  },
  {
    id: 'p05',
    name: 'Brembo GT Big Brake Kit',
    brand: 'Brembo',
    category: 'brakes',
    price: 106789,
    image: './images/thumbnails/Brembo GT Big Brake Kit.jpg',
    description: '6-piston front calipers, 380mm cross-drilled rotors. Track ready.'
  },
  {
    id: 'p06',
    name: 'Hondata FlashPro ECU Tune',
    brand: 'Hondata',
    category: 'tuning',
    price: 53779,
    image: './images/thumbnails/Hondata FlashPro ECU Tune.jpg',
    description: 'Full ECU remapping solution, live data logging, boost control.'
  },
  {
    id: 'p07',
    name: 'Tomei Expreme Ti Catback',
    brand: 'Tomei',
    category: 'exhaust',
    price: 68869,
    image: './images/thumbnails/Tomei Expreme Ti Catback.webp',
    description: 'Titanium cat-back exhaust, ultra-light, raw motorsport tone.'
  },
  {
    id: 'p08',
    name: 'BC Racing BR Series Coilovers',
    brand: 'BC Racing',
    category: 'suspension',
    price: 58000,
    image: './images/thumbnails/BC Racing BR Series Coilovers.webp',
    description: 'Monotube design, 30-way adjustable damping, street & track capable.'
  },
  {
    id: 'p09',
    name: 'Varis Carbon Rear Wing',
    brand: 'Varis',
    category: 'bodykit',
    price: 74269,
    image: './images/thumbnails/Varis Carbon Rear Wing.webp',
    description: 'Dry carbon GT wing, adjustable angle, full hardware included.'
  },
  {
    id: 'p10',
    name: 'AEM Cold Air Intake System',
    brand: 'AEM',
    category: 'engine',
    price: 22000,
    image: './images/thumbnails/AEM Cold Air Intake System.webp',
    description: 'Mandrel-bent aluminium intake tube, high-flow DryFlow filter.'
  },
  {
    id: 'p11',
    name: 'Wilwood Brake Pad Set — Track',
    brand: 'Wilwood',
    category: 'brakes',
    price: 9285,
    image: './images/thumbnails/Wilwood Brake Pad Set — Track.jpg',
    description: 'High-temp compound, zero fade up to 800°C, fits most big brake kits.'
  },
  {
    id: 'p12',
    name: 'Haltech Elite 2500 ECU',
    brand: 'Haltech',
    category: 'tuning',
    price: 133000,
    image: './images/thumbnails/Haltech Elite 2500 ECU.jpg',
    description: 'Standalone engine management, 8-cylinder support, full sensor suite.'
  },
  {
    id: 'p13',
    name: 'Mishimoto Intercooler Kit',
    brand: 'Mishimoto',
    category: 'engine',
    price: 37900,
    image: './images/thumbnails/Mishimoto Intercooler Kit.webp',
    description: 'Bar-and-plate front mount intercooler, 2.5" inlet/outlet, bolt-on.'
  },
  {
    id: 'p14',
    name: 'Whiteline Sway Bar Kit',
    brand: 'Whiteline',
    category: 'suspension',
    price: 26300,
    image: './images/thumbnails/Whiteline Sway Bar Kit.jpg',
    description: 'Adjustable front & rear sway bars, reduces body roll by 30%.'
  },
  {
    id: 'p15',
    name: 'TurboSmart Boost Controller',
    brand: 'TurboSmart',
    category: 'tuning',
    price: 16250,
    image: './images/thumbnails/TurboSmart Boost Controller.webp',
    description: 'Manual boost controller, 1-40 PSI range, compact universal fit.'
  },
  {
    id: 'p16',
    name: 'Rocket Bunny Wide Body Kit',
    brand: 'Rocket Bunny',
    category: 'bodykit',
    price: 186000,
    image: './images/thumbnails/Rocket Bunny Wide Body Kit.jpg',
    description: 'Full wide-body conversion: fenders, side skirts, front/rear diffusers.'
  }
];

// =================
// GLOBAL CART ARRAY
// =================
const CART_STORAGE_KEY = 'coremechanics_cart'; // localStorage key name

const saveCart = () => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
}

const loadCart = () => {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

let cart = loadCart();

// ================
// UTILITY FUNCTIONS
// ================

// Calculate product price
const calculatePrice = (price, quantity = 1) => +(price * quantity).toFixed(2);

// Calculate cart total
const calculateCartTotal = () => 
  cart.reduce((sum, item) => sum + calculatePrice(item.price, item.quantity || 1), 0)

// Format price display
const formatPrice = (price) => `${price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}`;

// ================
// Create product cards
// ================
const createProductCards = (products) => `
    <div class="product-card" data-id="${products.id}" data-category="${products.category}">
        <div class="product-image">
            <img src="${products.image}" alt="${products.name}">
            <span class="product-category-badge">${products.category}</span>
        </div>
        <div class="product-body">
            <p class="product-brand">${products.brand}</p>
            <h3 class="product-name">${products.name}</h3>
            <p class="product-description">${products.description}</p>
            <div class="product-footer">
                <span class="product-price">${formatPrice(products.price)}</span>
                <button 
                    class="product-add-button"
                    data-id="${products.id}"
                    data-name="${products.name}"
                    data-price="${products.price}"
                    data-brand="${products.brand}"
                    data-category="${products.category}"
                    data-image="${products.image}">
                    + Add to Cart
                </button>
            </div>
        </div>
    </div>
`;

// ===============
// CART LOGIC
// ===============

//render cart 
const renderCart = () => {
  const cartItemsElement = document.getElementById('cartItems');
  const cartTotalElement = document.getElementById('cartTotal');
  if (!cartItemsElement || !cartTotalElement) return;

  if (cart.length === 0) {
    cartItemsElement.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    if (cartTotalElement) cartTotalElement.textContent = '0,00 ₽';
    return;
  }

  let html = '';
  cart.forEach(item => {
    html += `
      <div class="cart-item-row" data-item-id=${item.id}>
        <div class="cart-item-image">${item.image ? `<img src="${item.image}" alt="${item.name}" height='64px' width='72px'>` : ''}</div>
        <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-price">${formatPrice(calculatePrice(item.price, item.quantity || 1))}</div>
        </div>
        <button class="cart-remove-button" onclick="removeFromCart('${item.id}')" title="Remove item">&times;</button>
      </div>
    `;
  });

  cartItemsElement.innerHTML = html;

  const total = calculateCartTotal(cart);
  if (cartTotalElement) cartTotalElement.textContent = formatPrice(total);
};

// Update cart count
const updateCartCount = () => {
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = cart.length;
  });
};

// Add item to cart
const addToCartItem = (item) => {
  cart.push(item);
  saveCart();
  updateCartCount();
  renderCart();
};

// Remove item from cart
const removeFromCart = (itemId) => {
  cart = cart.filter(item => item.id !== itemId);
  saveCart();
  updateCartCount();
  renderCart();
};

// Clear cart
const clearCart = () => {
  cart = [];
  saveCart();
  updateCartCount();
  renderCart();
};

// Handle Payment
const handlePay = () => {
  if (cart.length === 0) {
    showPopup('warning', 'Cart is Empty', 'Please add at least one item to your cart before proceeding to payment.');
    return;
  }

  const total = calculateCartTotal();
  const itemCount = cart.length;

  clearCart();
  closeCart();

  showPopup(
    'success',
    'Purchase Successful!',
    `Thank you for your order! ${itemCount} item${itemCount !== 1 ? 's' : ''} purchased for ${formatPrice(total)}. You will receive a confirmation email shortly.`
  );
};

// =================
// CART UI
// =================
const openCart = () => {
  document.getElementById('cartSidebar')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
};

const closeCart = () => {
  document.getElementById('cartSidebar')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('active');
  document.body.style.overflow = '';
};

// Attach cart button event
const attachCartButton = (container) => {
  const buttons = container.querySelectorAll('.product-add-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const item = {
        id: button.dataset.id + '_' + Date.now(),
        name: button.dataset.name,
        price: parseFloat(button.dataset.price),
        brand: button.dataset.brand,
        category: button.dataset.category,
        image: button.dataset.image,
        quantity: 1
      };
      addToCartItem(item);
    });
  });
};


/* =========================================
   POPUP SYSTEM
   ========================================= */
const showPopup = (type, title, message) => {
  const overlay = document.getElementById('popupOverlay');
  const box = document.getElementById('popupBox');
  const icon = document.getElementById('popupIcon');
  const titleEl = document.getElementById('popupTitle');
  const msgEl = document.getElementById('popupMsg');

  if (!overlay) return;

  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };

  box.className = 'popup-box ' + type;
  icon.textContent = icons[type] || '📢';
  titleEl.textContent = title;
  msgEl.textContent = message;

  overlay.classList.add('active');
};

const closePopup = () => {
  document.getElementById('popupOverlay')?.classList.remove('active');
};


// =================
// RENDER CATALOG
// =================
function renderCatalog(list) {
  const grid = document.getElementById('catalogGrid');
  const noResults = document.getElementById('noResultsMessage');
  const count = document.getElementById('resultsCount');

  grid.innerHTML = '';
  if (list.length === 0) {
    noResults.style.display = 'block';
    count.textContent = '0 items found';
    return;
  }

  noResults.style.display = 'none';
  count.textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;
  list.forEach(p => { grid.innerHTML += createProductCards(p); });
  attachCartButton(grid);
}

function initFilters() {
  let currentCategory = 'all';
  let currentSearch = '';
  let currentSort = 'default';
  let currentMaxPrice = 400000;

  const applyFilters = () => {
    let results = products.filter(p => {
      const categoryMatch = currentCategory === 'all' || p.category === currentCategory;
      const searchMatch = p.name.toLowerCase().includes(currentSearch) || p.brand.toLowerCase().includes(currentSearch);
      const priceMatch = p.price <= currentMaxPrice;
      return categoryMatch && searchMatch && priceMatch;
    });

    if (currentSort === 'price-asc') results.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-desc') results.sort((a, b) => b.price - a.price);
    else if (currentSort === 'name-asc') results.sort((a, b) => a.name.localeCompare(b.name));
    else if (currentSort === 'name-desc') results.sort((a, b) => b.name.localeCompare(a.name));

    renderCatalog(results);
  };

  // category buttons
  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentCategory = button.dataset.category;
      applyFilters();
    });
  });

  // search input
  document.getElementById('searchInput').addEventListener('input', e => {
    currentSearch = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  // sort select
  document.getElementById('sortSelect').addEventListener('change', e => {
    currentSort = e.target.value;
    applyFilters();
  });

  // price range
  const priceRange = document.getElementById('priceRange');
  const priceVal = document.getElementById('priceVal');
  priceRange.addEventListener('input', e => {
    currentMaxPrice = parseInt(e.target.value);
    priceVal.textContent = formatPrice(currentMaxPrice);
    applyFilters();
  });
}

// =================
// INITIALIZATION
// =================
document.addEventListener('DOMContentLoaded', () => {
  
  updateCartCount();
  renderCart();

  document.getElementById('cartToggle')?.addEventListener('click', () => {
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar?.classList.contains('open')) {
      closeCart();
    } else {
      openCart();
    }
  });

  // close cart button
  document.getElementById('closeCartButton')?.addEventListener('click', closeCart);

  // cart overlay click
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);

  // pay button
  document.getElementById('payButton')?.addEventListener('click', handlePay);

  // clear cart button
  document.getElementById('clearCartButton')?.addEventListener('click', () => {
    if (cart.length === 0) {
      showPopup('warning', 'Cart is Empty', 'There are no items in your cart to clear.');
      return;
    }
    clearCart();
    showPopup('info', 'Cart Cleared', 'All items have been removed from your cart.');
  });

  // Popup close on overlay click
  document.getElementById('popupOverlay')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('popupOverlay')) {
      closePopup();
    }
  });

  // keyboard/escape
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      closeCart();
      closePopup();
    }
  });

  const catalogGrid = document.getElementById('catalogGrid');
  if (catalogGrid){
    renderCatalog(products);
    initFilters();
  }

});

//test rename