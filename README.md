# OBSIDIAN - Premium Luxury Furniture Landing Page

A high-end, minimalist furniture e-commerce website with a digital art gallery aesthetic. Built with vanilla HTML5, CSS3, and JavaScript—no frameworks required.

## Features

✨ **Modern Design System**
- Elegant serif and sans-serif typography (Playfair Display + Manrope)
- Premium color palette (#FAFAFA, #111111, #F0F0F0)
- Heavy whitespace and generous spacing (80px-120px between sections)
- Fully responsive and mobile-optimized

🏠 **Multi-Page Architecture**
- **Home Page**: Hero section, featured collection, zig-zag category section
- **Showroom**: Dynamic product grid with real-time filtering by category
- **About**: Brand story, values, team, process, stats
- **Contact**: Contact form, FAQ, business hours, location

📦 **Dynamic Showroom Features**
- Filter products by category (Living, Dining, Bedroom, Office, All)
- Quick-view modal popups with product details
- WhatsApp integration for direct inquiries
- Smooth animations and transitions
- Lazy loading for images

🎨 **Design System**
- Strict color palette adherence
- CSS variables for easy theming
- Mobile-first responsive design
- Accessible semantic HTML

🔒 **SEO Optimized**
- Semantic HTML5 tags
- Meta descriptions and Open Graph tags
- Proper heading hierarchy
- Image alt attributes
- Structured data ready

## Project Structure

```
furniture/
├── index.html              # Home page
├── showroom.html          # Digital lookbook with filtering
├── about.html             # Brand story and values
├── contact.html           # Contact form and FAQ
├── css/
│   └── style.css          # Complete styling system
├── js/
│   ├── inventory.js       # Product database
│   └── main.js            # JavaScript functionality
└── images/                # Product images (placeholder paths)
```

## Getting Started

### 1. Setup

No build process required! Simply:

1. Clone or download the project
2. Ensure all files are in the correct folder structure
3. Open `index.html` in your browser

### 2. Add Your Images

The project uses placeholder image paths. Replace these with your actual images:

**Product Images:**
- `/images/sofa-vanta.jpg`
- `/images/sofa-ethereal.jpg`
- `/images/chair-cloud.jpg`
- `/images/table-obsidian.jpg`
- etc.

**Category Images:**
- `/images/category-living.png`
- `/images/category-dining.png`
- `/images/category-bedroom.png`
- `/images/category-office.png`

**Other Images:**
- `/images/hero-bg.jpg`
- `/images/about-showroom.jpg`
- `/images/team-member-1.jpg`, etc.

### 3. Customize Content

Edit the following in each HTML file:

- **Company info**: Logo, business hours, contact details
- **Product inventory**: Update `js/inventory.js` with your products
- **WhatsApp number**: Change phone number in forms and enquiry links
- **Analytics**: Add your Google Analytics ID
- **Social links**: Update footer social media links

## Product Inventory Structure

Each product in `inventory.js` has:

```javascript
{
  id: 'LIV-001',              // Unique product code
  name: 'The Vanta Sectional', // Product name
  category: 'living',          // Filter category
  price: 4500000,             // Price in base currency
  image: '/images/sofa-vanta.jpg', // Image path
  status: 'In Stock',         // Status badge
  desc: 'Italian leather...'  // Short description
}
```

**Categories:** `living`, `dining`, `bedroom`, `office`
**Statuses:** `In Stock`, `Pre-Order`, `Sold Out`

## Key Features Implementation

### Dynamic Filtering

The showroom filters products in real-time without page reloads:

```javascript
// Click a filter button
filterByCategory(category);

// Triggers product rendering
renderProducts(getProductsByCategory(category));
```

### Quick-View Modal

Click any product card to open a modal with:
- Large product image
- Title and price
- Description
- "Enquire on WhatsApp" button
- Auto-generated WhatsApp message

### WhatsApp Integration

Enquiry links generate pre-filled WhatsApp messages:

```
wa.me/?text=I am interested in [Product Name] ([Product ID]). Price: [Price]
```

### Contact Form

The contact form redirects to WhatsApp for inquiries and includes validation.

## CSS Features

### CSS Variables
Easy theming through root variables:
- Colors: backgrounds, text, accents
- Typography: fonts, sizes
- Spacing: margins, padding
- Transitions: smooth animations

### Responsive Grid System
- Mobile-first approach
- Flexible layouts with CSS Grid and Flexbox
- Breakpoints: 768px, 1024px, 1400px

### Animations
- Fade-in effects on product load
- Hover states on cards
- Smooth transitions throughout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

✅ Lazy loading for images
✅ Minimal CSS with no unused styles
✅ Vanilla JavaScript (no framework overhead)
✅ Optimized image formats
✅ CSS custom properties for small file sizes

## SEO Enhancements

✅ Semantic HTML5 tags
✅ Meta descriptions
✅ Open Graph tags for social sharing
✅ Proper heading hierarchy
✅ Image alt attributes
✅ Mobile responsiveness
✅ Fast loading times

## Customization Guide

### Change Brand Colors

Open `css/style.css` and update the `:root` variables:

```css
:root {
  --bg-primary: #FAFAFA;
  --text-primary: #111111;
  --btn-dark: #000000;
  /* etc */
}
```

### Update Typography

Change font imports in HTML `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont" rel="stylesheet">
```

Then update CSS variables:

```css
:root {
  --font-serif: "Your Serif Font", serif;
  --font-sans: "Your Sans Font", sans-serif;
}
```

### Add/Remove Products

Edit `js/inventory.js`:

```javascript
const productInventory = [
  // Add your products here
  {
    id: 'YOUR-ID',
    name: 'Product Name',
    category: 'category',
    price: 1000000,
    image: '/images/product.jpg',
    status: 'In Stock',
    desc: 'Description'
  }
];
```

## What's Included

✅ 4 fully responsive pages
✅ Dynamic product filtering
✅ Quick-view modals
✅ Contact form with WhatsApp integration
✅ 24 sample products across 4 categories
✅ Complete CSS design system
✅ Vanilla JavaScript functionality
✅ SEO optimization
✅ Mobile-optimized
✅ Accessibility features

## What's Not Included

The following require backend services (beyond this scope):

- User authentication
- Shopping cart/checkout
- Payment processing
- Database integration
- Email notifications
- Inventory management
- Admin dashboard

For these features, integrate with services like:
- Shopify API
- WooCommerce
- Stripe/PayPal
- Firebase
- Supabase

## Browser Testing

Test across devices:
- Desktop (1920px, 1440px, 1024px)
- Tablet (768px, 1024px)
- Mobile (375px, 414px, 480px)

Use browser dev tools for responsive testing.

## Performance Metrics

- First Contentful Paint (FCP): < 2s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s

## Future Enhancements

Consider adding:
- Blog section for furniture care tips
- Virtual room planner
- Customer testimonials
- Live chat support
- Newsletter signup
- Advanced search
- Product comparison
- Size/material guides
- 360° product views
- AR furniture preview

## Support & Updates

For customization or technical issues:
1. Check the CSS comments for variable names
2. Review the HTML structure for classes
3. Check `js/main.js` for function documentation

## License

This template is provided as-is for use by OBSIDIAN Furniture.

---

Built with ❤️ for luxury furniture brands | 2026
