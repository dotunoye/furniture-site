/* ============================================
   OBSIDIAN - Main JavaScript Functionality
   ============================================ */

// DOM Elements
const modal = document.getElementById('quickViewModal');
const modalClose = document.querySelector('.modal-close');
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// State Management
let currentCategory = 'all';

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  renderProducts(getProductsByCategory('all'));
  initializeEventListeners();
  setupSmoothScrolling();
});

// ============================================
// Product Rendering Functions
// ============================================

function renderProducts(products) {
  if (!productsGrid) return;

  // Clear grid
  productsGrid.innerHTML = '';

  // Add no results message if empty
  if (products.length === 0) {
    productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;"><p style="color: #555;">No products found in this category.</p></div>';
    return;
  }

  // Render each product
  products.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
    </div>
    <div class="product-info">
      <span class="product-status ${getStatusClass(product.status)}">${product.status}</span>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-desc">${product.desc}</p>
      <p class="product-price">${formatPrice(product.price)}</p>
    </div>
  `;

  card.addEventListener('click', () => openQuickView(product));
  return card;
}

function getStatusClass(status) {
  if (status === 'In Stock') return 'in-stock';
  if (status === 'Pre-Order') return 'pre-order';
  if (status === 'Sold Out') return 'sold-out';
  return '';
}

// ============================================
// Modal Functions
// ============================================

function openQuickView(product) {
  const modalImage = modal.querySelector('.modal-image img');
  const modalTitle = modal.querySelector('.modal-details h2');
  const modalStatus = modal.querySelector('.modal-details .product-status');
  const modalPrice = modal.querySelector('.modal-details .product-price');
  const modalDesc = modal.querySelector('.modal-details p');
  const whatsappBtn = modal.querySelector('.modal-whatsapp-btn');

  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalTitle.textContent = product.name;
  modalStatus.textContent = product.status;
  modalStatus.className = `product-status ${getStatusClass(product.status)}`;
  modalPrice.textContent = formatPrice(product.price);
  modalDesc.textContent = product.desc;

  // Generate WhatsApp link
  const whatsappMessage = `I am interested in the ${product.name} (${product.id}). Price: ${formatPrice(product.price)}`;
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
  whatsappBtn.href = whatsappLink;
  whatsappBtn.target = '_blank';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// ============================================
// Filter Functions
// ============================================

function filterByCategory(category) {
  currentCategory = category;

  // Update active button
  filterButtons.forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  // Filter and render products
  const filtered = getProductsByCategory(category);
  renderProducts(filtered);
}

// ============================================
// Event Listeners Setup
// ============================================

function initializeEventListeners() {
  // Modal close button
  if (modalClose) {
    modalClose.addEventListener('click', closeQuickView);
  }

  // Modal backdrop click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeQuickView();
      }
    });
  }

  // Filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', filterByCategory);
  });

  // Set default active button
  if (filterButtons.length > 0) {
    filterButtons[0].classList.add('active');
  }

  // Keyboard escape to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeQuickView();
    }
  });
}

// ============================================
// Contact Form Handling
// ============================================

function initializeContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    // Validate form
    if (!data.name || !data.email || !data.phone || !data.message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showNotification('Please enter a valid email', 'error');
      return;
    }

    // Send via WhatsApp (simulated)
    const whatsappMessage = `Hello OBSIDIAN,

I would like to get in touch regarding your furniture collection.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message: ${data.message}`;

    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');

    // Reset form
    this.reset();
    showNotification('Message sent! Redirecting to WhatsApp...', 'success');
  });
}

// ============================================
// Utility Functions
// ============================================

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 24px;
    background-color: ${type === 'success' ? '#2d7c2d' : '#a02828'};
    color: white;
    border-radius: 4px;
    font-weight: 600;
    z-index: 1000;
    animation: slideInDown 0.3s ease-out;
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideInUp 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes slideInUp {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// Intersection Observer for Lazy Loading
// ============================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// Mobile Menu Toggle (if needed)
// ============================================

function initializeMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.toggle('active');
      }
      if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.toggle('active');
      }
    });
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
      }
      mobileMenuOverlay.classList.remove('active');
    });
  }

  // Close menu when a link is clicked
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
      }
      if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('active');
      }
    });
  });
}

// ============================================
// Set Active Navigation Link
// ============================================

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Set active on navbar-center links
  const navbarLinks = document.querySelectorAll('.navbar-center a');
  navbarLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Set active on mobile menu links
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Call on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initializeContactForm();
  initializeMobileMenu();
  setActiveNavLink();
});

// ============================================
// Analytics & SEO Helpers
// ============================================

function trackProductView(productId) {
  if ('gtag' in window) {
    gtag('event', 'view_item', {
      items: [{
        item_id: productId,
        item_name: productId
      }]
    });
  }
}

function trackAddToCart(product) {
  if ('gtag' in window) {
    gtag('event', 'add_to_cart', {
      currency: 'NGN',
      items: [{
        item_id: product.id,
        item_name: product.name,
        price: product.price
      }]
    });
  }
}
