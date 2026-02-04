# 📋 CSS Code Snippets - Quick Reference

## 1. Mobile Menu - Vertical Stack

```css
/* Mobile Menu Container */
.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  right: -300px;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  background: rgba(17, 17, 17, 0.98);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 999;
  padding: 100px 30px 40px;
  transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 40px !important;
}

.mobile-menu.active {
  right: 0;
}

/* Mobile Menu Links */
.mobile-menu a {
  display: block;
  color: var(--text-light);
  font-size: 1.3rem;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  transition: all var(--transition-smooth);
  height: auto;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
}

.mobile-menu a:hover,
.mobile-menu a.active {
  color: var(--accent-gold);
  font-weight: 600;
  text-decoration: underline;
}
```

---

## 2. Desktop Grid (3 Columns)

```css
.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  animation: fadeIn var(--transition-fade);
}
```

---

## 3. Tablet Grid (2 Columns)

```css
@media (min-width: 768px) and (max-width: 1024px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .modal-image {
    height: 40vh;
  }
}
```

---

## 4. Mobile Grid (1 Column)

```css
@media (max-width: 768px) {
  .featured-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
```

---

## 5. Card - Fluid Width

```css
.product-card {
  width: 100%;  /* Key: Full width of grid cell */
  background-color: var(--bg-primary);
  cursor: pointer;
  transition: all var(--transition-fade);
  border: none;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.product-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.featured-card {
  width: 100%;  /* Key: Full width of grid cell */
  background-color: var(--bg-primary);
  cursor: pointer;
  transition: all var(--transition-fade);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
```

---

## 6. Images - Aspect Ratio

```css
.product-image {
  width: 100%;
  aspect-ratio: 4/5;  /* Key: Enforced aspect ratio */
  background-color: var(--bg-secondary);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity var(--transition-fade);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* Key: Proper image fitting */
}

.featured-card-image {
  width: 100%;
  aspect-ratio: 4/5;
  background-color: var(--bg-secondary);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity var(--transition-fade);
}

.featured-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## 7. Modal - Responsive

```css
/* Desktop Modal */
.modal-content {
  background-color: var(--bg-primary);
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
  position: relative;
  margin: var(--spacing-md);
  animation: slideUp var(--transition-fade);
  border-radius: var(--border-radius);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: 45vh;
  background-color: var(--bg-secondary);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.modal-details {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px;
  flex-grow: 1;
  background-color: var(--bg-primary);
}

/* Tablet Modal */
@media (min-width: 768px) and (max-width: 1024px) {
  .modal-content {
    max-width: 500px;
  }

  .modal-image {
    height: 40vh;
  }
}

/* Mobile Modal */
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    padding: 0;
    flex-direction: column;
  }

  .modal-image {
    width: 100%;
    height: 45vh;
  }

  .modal-details {
    padding: 30px 20px;
  }
}
```

---

## 8. Modal Close Button

```css
.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  font-size: 2rem;  /* Large and visible */
  cursor: pointer;
  color: var(--text-primary);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-smooth);
  border-radius: 50%;
  z-index: 9999;  /* Always on top */
}

.modal-close:hover {
  background-color: var(--text-primary);
  color: var(--text-light);
  transform: scale(1.1);
}
```

---

## 9. Active Navigation Link

```css
/* Desktop Active Link */
.navbar-center a.active {
  color: var(--accent-gold);
  font-weight: 700;
}

.navbar-center a.active::after {
  width: 100%;
}

/* Mobile Active Link */
.mobile-menu a.active {
  color: var(--accent-gold);
  font-weight: 600;
  text-decoration: underline;
}
```

---

## 10. Typography Scaling

```css
h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: -0.02em;
}

h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  letter-spacing: -0.015em;
}

h3 {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
}
```

---

## 11. Small Mobile Overrides (<480px)

```css
@media (max-width: 480px) {
  :root {
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
  }

  .mobile-menu {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    width: 100% !important;
    height: 100vh;
    padding: 80px 20px 40px;
    gap: 30px !important;
  }

  .mobile-menu a {
    width: 100%;
    font-size: 1.1rem;
    padding: 16px 0;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .featured-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .modal-content {
    width: 95%;
    padding: 0;
  }

  .modal-image {
    width: 100%;
    height: 45vh;
  }

  .modal-details {
    padding: 30px 20px;
  }
}
```

---

## 12. Hamburger Menu

```css
.menu-toggle {
  display: none;  /* Hidden on desktop */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--text-light);
  width: 44px;
  height: 44px;
  min-width: 44px;
  padding: 0;
  transition: all var(--transition-smooth);
}

.menu-toggle:hover {
  transform: scale(1.1);
}

/* Show on tablet/mobile */
@media (max-width: 1024px) {
  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
```

---

## 13. Mobile Menu Overlay

```css
.mobile-menu-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 998;
}

.mobile-menu-overlay.active {
  display: block;
}
```

---

## 14. Navbar Styling

```css
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  padding: 15px 30px;
  z-index: 1000;
  background-color: rgba(17, 17, 17, 0.641);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 50px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
}

.navbar-logo {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-light);
  text-decoration: none;
  white-space: nowrap;
}

.navbar-center {
  display: flex;
  gap: var(--spacing-lg);
  flex: 1;
  justify-content: end;
  align-items: center;
  padding-right: 24px;
}

.navbar-center a {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-light);
  position: relative;
  text-decoration: none;
}

.navbar-cta {
  background-color: var(--text-primary);
  color: var(--text-light);
  font-weight: 600;
  font-size: 0.85rem;
  padding: 10px 20px;
  border-radius: 50px;
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
  transition: all var(--transition-smooth);
  margin-left: auto;
  cursor: pointer;
}

.navbar-cta:hover {
  background-color: var(--accent-gold);
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}
```

---

## Quick Copy-Paste Sections

### For a New Grid Layout (3-2-1)
```css
/* Desktop */
grid-template-columns: repeat(3, 1fr);

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}

/* Mobile */
@media (max-width: 768px) {
  grid-template-columns: 1fr;
}

/* All breakpoints */
gap: 30px;
```

### For a New Card Component
```css
.new-card {
  width: 100%;
  background-color: var(--bg-primary);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all var(--transition-fade);
}

.new-card:hover {
  transform: translateY(-8px);
}

.new-card-image {
  width: 100%;
  aspect-ratio: 4/5;
  overflow: hidden;
}

.new-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## CSS Variables Used

```css
:root {
  /* Colors */
  --bg-primary: #FAFAFA;
  --bg-secondary: #F0F0F0;
  --text-primary: #111111;
  --text-secondary: #555555;
  --text-light: #FFFFFF;
  --btn-dark: #000000;
  --accent-gold: #D4AF37;
  --border-color: #E8E8E8;
  --overlay-dark: rgba(0, 0, 0, 0.4);

  /* Fonts */
  --font-serif: "Playfair Display", serif;
  --font-sans: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 32px;
  --spacing-lg: 48px;
  --spacing-xl: 64px;

  /* Transitions */
  --transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-fade: 0.4s ease-in-out;

  /* Border Radius */
  --border-radius: 12px;

  /* Max Width */
  --max-width: 1400px;
}
```

---

This is your complete CSS reference guide! Copy and paste any snippet as needed. 🎨
