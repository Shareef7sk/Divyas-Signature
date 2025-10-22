# 🛍️ Divya's Signature - Modern E-Commerce Fashion Boutique

A sophisticated, fully-featured e-commerce website for a luxury fashion boutique with shopping cart, authentication, and order management.

![Status](https://img.shields.io/badge/status-ready%20to%20deploy-success)
![Frontend](https://img.shields.io/badge/frontend-HTML%2FCSS%2FJS-blue)
![Backend](https://img.shields.io/badge/backend-Node.js-green)

---

## ✨ Features

### 🛒 Shopping Experience
- Modern, responsive product catalog
- Real-time shopping cart with localStorage
- Quantity management and price calculation
- Smooth add-to-cart notifications
- Product quick view modal
- Multiple product categories

### 👤 User Management
- Secure user authentication (JWT)
- Password hashing with bcrypt
- Login/signup with validation
- User profile management
- Persistent sessions

### 📦 Order Management
- Complete checkout flow
- Address collection
- Multiple payment methods
- Order history tracking
- Order status updates
- Cancel and reorder functionality
- Remove completed orders from history

### 🎨 Design Features
- Responsive design (mobile, tablet, desktop)
- 3D background effects on login page
- 5D particle effects on signup page
- Glass-morphism UI elements
- Smooth animations and transitions
- Professional typography
- Settings menu with quick actions

---

## 📂 Project Structure

```
divya-signature-boutique/
├── public/                 # Frontend HTML pages
├── assets/                 # Images, CSS, JS
├── backend/                # Node.js API server
├── docs/                   # Documentation
├── netlify.toml           # Netlify config
├── package.json           # Dependencies
└── deploy.bat             # Quick deploy script
```

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for detailed structure.

---

## 🚀 Quick Start

### Option 1: Frontend Only (Static Site)
```bash
# Open in browser
cd public
# Open index.html in your browser
```

### Option 2: With Backend (Full Stack)
```bash
# Install dependencies
npm install

# Start server
npm start
```

Visit: `http://localhost:3000/public/index.html`

---

## 🌐 Deploy to Netlify

### Method 1: Automated (Recommended)
Double-click `deploy.bat` and follow the prompts!

### Method 2: Manual
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Then:
1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import from Git"
3. Select your repository
4. Build settings:
   - Publish directory: `public`
   - Build command: (leave empty)
5. Click "Deploy"

**Done!** Your site will be live in 1-2 minutes.

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [QUICKSTART_DEPLOY.md](docs/QUICKSTART_DEPLOY.md) | 5-minute deployment guide |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md) | Comprehensive deployment guide |
| [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) | Detailed file structure |
| [BACKEND_README.md](docs/BACKEND_README.md) | Backend API documentation |

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **JavaScript (ES6+)** - Vanilla JS
- **Three.js** - 3D/5D effects
- **LocalStorage** - Client-side data persistence

### Backend (Optional)
- **Node.js** - Runtime
- **Express.js** - Web framework
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **JSON** - File-based database

---

## 📦 NPM Scripts

```bash
npm start        # Start backend server
npm run dev      # Start with auto-reload (nodemon)
npm run deploy   # Quick deploy to Git
```

---

## 📄 Pages

| Page | Description | Path |
|------|-------------|------|
| **Home** | Hero section, featured products | `public/index.html` |
| **Login** | User authentication with 3D effects | `public/login.html` |
| **Signup** | Registration with 5D background | `public/signup.html` |
| **Cart** | Shopping cart management | `public/cart.html` |
| **Checkout** | Address and payment | `public/checkout.html` |
| **Orders** | Order history and tracking | `public/orders.html` |
| **New In** | Latest arrivals | `public/New_in.html` |
| **Clothing** | Clothing catalog | `public/clothing.html` |
| **Accessories** | Accessories catalog | `public/accessories.html` |
| **Designers** | Designer profiles | `public/designers.html` |
| **Journal** | Blog and articles | `public/journal.html` |

---

## 🎨 Key Features Breakdown

### Shopping Cart
- ✅ Add to cart from any page
- ✅ Update quantities
- ✅ Remove items
- ✅ Persistent storage
- ✅ Cart count badge
- ✅ Subtotal/tax/shipping calculation

### Authentication
- ✅ Secure signup with validation
- ✅ Email uniqueness check
- ✅ Password strength requirements
- ✅ JWT token-based auth
- ✅ Remember me functionality
- ✅ New user detection

### Orders
- ✅ Complete order history
- ✅ Status tracking (Pending, Confirmed, Shipped, Delivered, Cancelled)
- ✅ Cancel active orders
- ✅ Reorder functionality
- ✅ Remove completed orders
- ✅ Order details view

---

## 🔒 Security

- ✅ Password hashing with bcrypt
- ✅ JWT token authentication
- ✅ HTTPS ready
- ✅ XSS protection headers
- ✅ CORS configuration
- ✅ Input validation

---

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Tablet optimization
- ✅ Desktop enhancement
- ✅ Touch-friendly interactions
- ✅ Adaptive images
- ✅ Fluid typography

---

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 🤝 Contributing

This is a client project. For issues or questions:
1. Check the documentation in `docs/`
2. Review `PROJECT_STRUCTURE.md`
3. Contact the development team

---

## 📝 License

MIT License - See LICENSE file for details

---

## 🎉 Ready to Deploy?

1. ✅ All files organized
2. ✅ Documentation complete
3. ✅ Netlify configuration ready
4. ✅ Backend optional but ready
5. ✅ Mobile responsive

**Choose your deployment method:**
- **Quick**: Double-click `deploy.bat`
- **Manual**: Follow `docs/QUICKSTART_DEPLOY.md`
- **Detailed**: Read `docs/DEPLOYMENT.md`

---

## 📞 Support

For questions or assistance:
- 📧 Email: support@divyassignature.com
- 📖 Docs: Check the `docs/` folder
- 🐛 Issues: Review console errors (F12)

---

**Built with ❤️ for Divya's Signature**

*Modern. Elegant. E-commerce.*

---

**Last Updated**: October 22, 2025  
**Version**: 2.0.0  
**Status**: Production Ready ✅

# Divyas-Signature
