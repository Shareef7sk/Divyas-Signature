# Deployment Guide - Divya's Signature

## 🚀 Quick Deployment to Netlify

### Prerequisites
- GitHub account
- Netlify account (free tier is fine)
- Git installed on your computer

---

## Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)
```bash
cd c:\Documents\my_site\div_page
git init
```

### 1.2 Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it: `divya-signature-boutique`
4. Don't initialize with README (we already have one)
5. Click "Create repository"

### 1.3 Connect and Push
```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Divya's Signature E-commerce site"

# Add remote (replace with your GitHub URL)
git remote add origin https://github.com/YOUR-USERNAME/divya-signature-boutique.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Netlify

### Option A: Connect via GitHub (Recommended)

1. **Login to Netlify**
   - Go to [https://app.netlify.com](https://app.netlify.com)
   - Sign up or login (can use GitHub account)

2. **Create New Site**
   - Click "Add new site" → "Import an existing project"
   - Click "GitHub"
   - Authorize Netlify to access your repos

3. **Configure Build Settings**
   - Choose your repository: `divya-signature-boutique`
   - Branch to deploy: `main`
   - Build command: (leave empty)
   - Publish directory: `.` (just a dot)
   - Click "Deploy site"

4. **Wait for Deployment**
   - Netlify will build and deploy (takes 1-2 minutes)
   - You'll get a random URL like: `random-name-123.netlify.app`

5. **Custom Domain (Optional)**
   - Click "Domain settings"
   - Add your custom domain
   - Follow DNS configuration steps

### Option B: Drag & Drop Deploy

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your entire project folder
3. Wait for deployment
4. Get your live URL

---

## Step 3: Backend Deployment (Optional)

Since you have a Node.js backend (`server.js`), you have two options:

### Option A: Deploy Backend Separately

**Recommended Services:**
- [Render](https://render.com) - Free tier available
- [Railway](https://railway.app) - Easy deployment
- [Heroku](https://heroku.com) - Popular choice

**Steps for Render:**
1. Go to [Render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your repository
5. Configure:
   - Name: `divya-signature-api`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node server.js`
6. Add Environment Variables:
   ```
   PORT=3000
   JWT_SECRET=your-secret-key-here
   NODE_ENV=production
   ```
7. Click "Create Web Service"

**Update Frontend API Calls:**
After backend is deployed, update all API calls in your HTML files:

```javascript
// Change from:
fetch('http://localhost:3000/api/signin', ...)

// To:
fetch('https://your-backend.onrender.com/api/signin', ...)
```

Files to update:
- `login.html` (lines with `/api/signin`)
- `signup.html` (lines with `/api/signup`)

### Option B: Use Netlify Functions (Advanced)

Convert `server.js` to serverless functions. This requires restructuring.

---

## Step 4: Environment Configuration

### 4.1 Update API URLs

Create a config file for easy management:

**Create `config.js`:**
```javascript
const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3000'
  : 'https://your-backend.onrender.com';

export default API_BASE_URL;
```

### 4.2 Set Netlify Environment Variables (if needed)

1. Go to Netlify Dashboard
2. Select your site
3. Settings → Environment variables
4. Add variables:
   ```
   API_URL=https://your-backend.onrender.com
   ```

---

## Step 5: Testing Deployment

### Test Checklist:
- [ ] Homepage loads correctly
- [ ] All pages are accessible
- [ ] Images load properly
- [ ] Navigation works
- [ ] Cart functionality works
- [ ] Mobile view is responsive
- [ ] Login/Signup works (if backend deployed)
- [ ] Settings menu opens
- [ ] Products can be added to cart

### Common Issues:

**Issue: Pages show 404**
- Solution: Check `netlify.toml` is properly configured
- Ensure all HTML files are in root directory

**Issue: Images not loading**
- Solution: Check image paths are relative
- Verify `cover_images` folder is committed to Git

**Issue: API calls fail**
- Solution: Update API URLs to backend deployment
- Check CORS settings in `server.js`

---

## Step 6: Continuous Deployment

Once connected to GitHub, every push automatically deploys:

```bash
# Make changes to your files
git add .
git commit -m "Update product catalog"
git push origin main

# Netlify automatically deploys!
```

---

## Step 7: Custom Domain Setup

### Using Netlify DNS (Easiest)

1. Buy domain from any registrar (Namecheap, GoDaddy, etc.)
2. In Netlify:
   - Domain settings → Add custom domain
   - Enter your domain: `divyassignature.com`
   - Click "Verify"
3. Update nameservers at your registrar to Netlify's:
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```
4. Wait for DNS propagation (up to 24 hours)
5. Enable HTTPS (automatic with Netlify)

---

## 📊 Deployment Checklist

Before going live:

- [ ] All pages tested
- [ ] Mobile responsiveness verified
- [ ] Images optimized
- [ ] HTTPS enabled
- [ ] Custom domain configured (optional)
- [ ] Backend deployed (if using auth)
- [ ] Environment variables set
- [ ] Analytics added (Google Analytics, etc.)
- [ ] SEO meta tags added
- [ ] Favicon added
- [ ] 404 page created
- [ ] Terms & Privacy pages created
- [ ] Contact information updated

---

## 🔒 Security Checklist

- [ ] HTTPS enabled
- [ ] Secure headers configured (`netlify.toml`)
- [ ] JWT secrets are environment variables (not hardcoded)
- [ ] `users.json` is in `.gitignore`
- [ ] CORS properly configured
- [ ] XSS protection enabled
- [ ] Input validation on forms

---

## 📈 Post-Deployment

### Monitor Your Site:
1. Netlify Analytics (paid feature)
2. Google Analytics (free)
3. Google Search Console
4. Uptime monitoring (UptimeRobot)

### Optimize Performance:
1. Compress images
2. Minify CSS/JS (build step)
3. Enable caching headers
4. Use CDN for assets

---

## 🆘 Getting Help

**Netlify Issues:**
- [Netlify Support](https://support.netlify.com)
- [Netlify Community](https://answers.netlify.com)

**General Issues:**
- Check browser console for errors
- Test in incognito mode
- Clear cache and cookies

---

## 🎉 Success!

Your site is now live! Share your URL:
- `https://your-site-name.netlify.app`
- Or your custom domain

**Next Steps:**
1. Share with friends and family
2. Add to portfolio
3. Monitor performance
4. Collect user feedback
5. Iterate and improve

---

Built with ❤️ for the web

