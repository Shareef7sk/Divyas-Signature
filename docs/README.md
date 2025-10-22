# Divya's Signature Designer - E-Commerce Website

A modern, elegant e-commerce website for luxury fashion boutique featuring designer clothing, accessories, and a complete shopping experience.

## 🌟 Features

- **Responsive Design**: Beautiful UI that works on desktop, tablet, and mobile
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **User Authentication**: Secure login/signup with JWT tokens
- **Order Management**: Track orders with detailed status updates
- **Checkout Process**: Complete checkout flow with address collection
- **3D/5D Effects**: Stunning visual effects on login and signup pages
- **Settings Menu**: Comprehensive user settings and navigation
- **Product Catalog**: Multiple product categories (Clothing, Accessories, New Arrivals)

## 🚀 Live Demo

Visit the live site: [Your Netlify URL will appear here after deployment]

## 📁 Project Structure

```
div_page/
├── index.html              # Homepage
├── login.html              # Login page with 3D effects
├── signup.html             # Signup page with 5D effects
├── cart.html               # Shopping cart
├── checkout.html           # Checkout with address form
├── orders.html             # Order history
├── New_in.html             # New arrivals
├── clothing.html           # Clothing catalog
├── accessories.html        # Accessories catalog
├── designers.html          # Designer profiles
├── journal.html            # Blog/Journal
├── cover_images/           # Hero images
├── server.js               # Node.js backend (optional)
├── package.json            # Dependencies
├── netlify.toml            # Netlify configuration
└── README.md               # This file
```

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)**: Vanilla JS for interactivity
- **Three.js**: 3D/5D background effects
- **Google Fonts**: Playfair Display & Tenor Sans

### Backend (Optional - For Development)
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **JWT**: Authentication tokens
- **bcrypt**: Password hashing

## 📦 Installation & Local Development

### Frontend Only (Static Site)

1. Clone the repository:
```bash
git clone [your-repo-url]
cd div_page
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000
```

3. Visit `http://localhost:8000`

### With Backend (Full Stack)

1. Install dependencies:
```bash
npm install
```

2. Start the backend server:
```bash
node server.js
```

3. Visit `http://localhost:3000`

## 🌐 Deployment to Netlify

### Option 1: Deploy via Git (Recommended)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-github-repo-url]
git push -u origin main
```

2. **Connect to Netlify**:
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Configure build settings:
     - Build command: (leave empty)
     - Publish directory: `.` (root)
   - Click "Deploy site"

3. **Backend Deployment** (Optional):
   - Deploy `server.js` to a separate service (Render, Railway, Heroku)
   - Update API calls in frontend to point to your backend URL
   - Or use Netlify Functions (requires code changes)

### Option 2: Drag & Drop

1. Build your site (if needed)
2. Drag the project folder to Netlify's deploy zone
3. Done!

## 🔑 Environment Setup

For backend functionality, you may need:

```env
PORT=3000
JWT_SECRET=your-secret-key-here
NODE_ENV=production
```

## 📱 Features Breakdown

### Shopping Experience
- ✅ Product browsing with filters
- ✅ Add to cart with quantity management
- ✅ Cart persistence across sessions
- ✅ Real-time cart count badge
- ✅ Checkout with address collection
- ✅ Order history and tracking
- ✅ Order cancellation and reordering

### User Account
- ✅ User registration
- ✅ Secure login
- ✅ JWT authentication
- ✅ Profile management
- ✅ Order history
- ✅ Logout functionality

### Design Features
- ✅ Responsive navigation
- ✅ Off-canvas mobile menu
- ✅ Product quick view modal
- ✅ 3D product card effects
- ✅ Animated notifications
- ✅ Settings dropdown menu
- ✅ Glass-morphism UI elements

## 🎨 Customization

### Colors
Edit CSS variables in any HTML file:
```css
:root {
    --color-rich-black: #1a1a1a;
    --color-off-white: #f5f5f5;
    --color-muted-gold: #d4af37;
    --color-medium-gray: #808080;
}
```

### Fonts
Current fonts: Playfair Display (headings) & Tenor Sans (body)
Change in Google Fonts link in `<head>` section

### Products
Add products in the HTML files by duplicating product card markup

## 🔒 Security Notes

- Passwords are hashed with bcrypt
- JWT tokens for session management
- HTTPS recommended for production
- Secure headers configured in `netlify.toml`
- XSS protection enabled

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

- Backend API calls will fail without backend server running
- LocalStorage used for cart (clears on browser data clear)
- No payment gateway integration (ready for integration)

## 🚧 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Email notifications
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Search and filters
- [ ] Admin dashboard
- [ ] Real-time inventory management

## 📄 License

This project is licensed under the MIT License.

## 👥 Credits

- Design: Divya's Signature
- Development: [Your Name]
- Images: Pexels (placeholder images)

## 📞 Support

For issues and questions:
- Email: support@divyassignature.com
- GitHub Issues: [your-repo-url]/issues

## 🙏 Acknowledgments

- Three.js for 3D effects
- Google Fonts for typography
- Pexels for stock images
- Netlify for hosting

---

Built with ❤️ for fashion enthusiasts

