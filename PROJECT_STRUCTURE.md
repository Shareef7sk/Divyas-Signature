# 📂 Project Structure - Divya's Signature

## Directory Organization

```
divya-signature-boutique/
│
├── 📁 public/                      # Frontend files (Netlify serves from here)
│   ├── index.html                  # Homepage
│   ├── login.html                  # Login page with 3D effects
│   ├── signup.html                 # Signup page with 5D effects
│   ├── cart.html                   # Shopping cart
│   ├── checkout.html               # Checkout with address collection
│   ├── orders.html                 # Order history and management
│   ├── New_in.html                 # New arrivals catalog
│   ├── clothing.html               # Clothing products
│   ├── accessories.html            # Accessories catalog
│   ├── designers.html              # Designer profiles
│   ├── journal.html                # Blog/Articles
│   └── settings-component.html     # Reusable settings component
│
├── 📁 assets/                      # Static assets
│   ├── 📁 images/
│   │   ├── 📁 cover/              # Hero/cover images
│   │   │   └── cover_image.jpeg
│   │   └── 📁 products/           # Product images
│   │       └── pexels-photo-3765114.jpeg
│   ├── 📁 css/                    # (Future) Separate CSS files
│   └── 📁 js/                     # (Future) Separate JS files
│
├── 📁 backend/                     # Node.js backend (Deploy separately)
│   ├── server.js                   # Express server with auth
│   └── users.json                  # User database (gitignored)
│
├── 📁 docs/                        # Documentation
│   ├── README.md                   # Main project documentation
│   ├── DEPLOYMENT.md               # Detailed deployment guide
│   ├── QUICKSTART_DEPLOY.md        # 5-minute quick start
│   ├── NETLIFY_SETUP_COMPLETE.md   # Setup completion guide
│   ├── QUICK_START.md              # Backend quick start
│   └── BACKEND_README.md           # Backend documentation
│
├── 📁 node_modules/                # Dependencies (gitignored)
│
├── 📄 netlify.toml                 # Netlify configuration
├── 📄 _redirects                   # URL redirect rules
├── 📄 .gitignore                   # Git ignore rules
├── 📄 package.json                 # Project dependencies
├── 📄 package-lock.json            # Dependency lock file
├── 📄 deploy.bat                   # Windows deployment script
└── 📄 PROJECT_STRUCTURE.md         # This file
```

---

## 📋 File Descriptions

### Public Folder (Frontend)
All HTML pages that users can access directly. Netlify serves these files.

| File | Purpose | Key Features |
|------|---------|--------------|
| `index.html` | Homepage | Hero section, product grid, settings menu, cart |
| `login.html` | Authentication | 3D background, JWT integration, new user modal |
| `signup.html` | Registration | 5D background, form validation, mobile-friendly |
| `cart.html` | Shopping cart | Quantity management, price calculation |
| `checkout.html` | Checkout flow | Address form, payment selection, order placement |
| `orders.html` | Order history | Status tracking, cancel/reorder, remove history |
| `New_in.html` | New products | Latest arrivals with add-to-cart |
| `clothing.html` | Clothing catalog | Filtered product view |
| `accessories.html` | Accessories | Bags, watches, jewelry |
| `designers.html` | Designer info | Brand profiles and stories |
| `journal.html` | Blog/Articles | Content and inspiration |

### Assets Folder
Static resources like images, CSS, and JavaScript.

- **images/cover/**: Hero and banner images
- **images/products/**: Product photography
- **css/**: (Future) Separate stylesheets
- **js/**: (Future) Separate JavaScript modules

### Backend Folder
Node.js server for authentication and user management.

- **server.js**: Express API with JWT authentication
- **users.json**: Local user database (excluded from Git)

### Docs Folder
Complete project documentation and guides.

| File | Purpose |
|------|---------|
| `README.md` | Project overview, features, tech stack |
| `DEPLOYMENT.md` | Step-by-step deployment to Netlify |
| `QUICKSTART_DEPLOY.md` | 5-minute deployment guide |
| `NETLIFY_SETUP_COMPLETE.md` | Post-setup summary |
| `BACKEND_README.md` | Backend API documentation |
| `QUICK_START.md` | Backend quick start guide |

---

## 🚀 Deployment Structure

### Netlify (Frontend)
```
Build settings:
- Publish directory: public
- Build command: (none)
```

The `netlify.toml` file configures:
- Publish directory (`public`)
- Security headers
- Caching rules
- API redirects

### Backend Deployment (Optional)
Deploy `backend/` separately to:
- Render.com
- Railway.app  
- Heroku
- Vercel (serverless)

---

## 🔧 Local Development

### Frontend Only
```bash
# Open any HTML file directly in browser
# Or use a local server:
npx http-server public -p 8000
```

### With Backend
```bash
# Install dependencies
npm install

# Start backend server
npm start

# Or with auto-restart
npm run dev
```

The backend serves from `backend/` folder and the frontend HTML files expect API at `http://localhost:3000`.

---

## 📦 What Gets Deployed

### To Netlify (Frontend)
✅ `public/` folder contents  
✅ `assets/` folder  
✅ `netlify.toml`  
✅ `_redirects`  

❌ `backend/` (deploy separately)  
❌ `node_modules/`  
❌ `docs/`  
❌ `.git/`  

### To Render/Railway (Backend)
✅ `backend/server.js`  
✅ `package.json`  
✅ `package-lock.json`  

❌ `public/`  
❌ `assets/`  
❌ `users.json` (created on server)  

---

## 🔗 Path References

### In HTML Files
```html
<!-- Images -->
<img src="../assets/images/cover/cover_image.jpeg">
<img src="../assets/images/products/product.jpeg">

<!-- Links to other pages (within public/) -->
<a href="cart.html">Cart</a>
<a href="login.html">Login</a>
```

### In API Calls
```javascript
// Development
fetch('http://localhost:3000/api/signin', ...)

// Production (update after backend deployment)
fetch('https://your-backend.onrender.com/api/signin', ...)
```

---

## 🎯 Benefits of This Structure

1. **Clean Separation**: Frontend and backend are clearly separated
2. **Easy Deployment**: Netlify auto-deploys from `public/`
3. **Organized Assets**: All images in one place
4. **Clear Documentation**: All guides in `docs/`
5. **Gitignore Friendly**: Sensitive files automatically excluded
6. **Scalable**: Easy to add more pages, styles, scripts
7. **Professional**: Industry-standard structure

---

## 🔄 Migration Guide

If you need to change structure:

### Add New Page
1. Create `new-page.html` in `public/`
2. Link from other pages using `href="new-page.html"`
3. Done!

### Add New Image
1. Place in `assets/images/products/` or `assets/images/cover/`
2. Reference with `../assets/images/folder/image.jpg`
3. Commit and push

### Extract CSS/JS
1. Create files in `assets/css/` or `assets/js/`
2. Link in HTML: `<link rel="stylesheet" href="../assets/css/style.css">`
3. Move inline styles/scripts to these files

---

## 📊 File Sizes

Keep these in mind for performance:

- HTML files: < 200KB each ✅
- Images: Compress to < 500KB each
- Total assets: Keep under 50MB for free Netlify

---

## 🎉 Ready to Deploy!

Your project is now perfectly organized for:
- ✅ Professional presentation
- ✅ Easy maintenance
- ✅ Quick deployment
- ✅ Team collaboration
- ✅ Future scaling

See `docs/QUICKSTART_DEPLOY.md` to deploy now!

---

**Last Updated**: October 22, 2025  
**Structure Version**: 2.0

