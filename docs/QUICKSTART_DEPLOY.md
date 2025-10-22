# 🚀 Quick Start - Deploy in 5 Minutes

## ⚡ Fastest Way to Deploy

### Step 1: Install Git (if not installed)
Download from: https://git-scm.com/downloads

### Step 2: Open Terminal/PowerShell in Project Folder
```powershell
cd c:\Documents\my_site\div_page
```

### Step 3: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Divya's Signature Boutique"
```

### Step 4: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `divya-signature-boutique`
3. Click "Create repository"
4. Copy the repository URL

### Step 5: Push to GitHub
```bash
# Replace YOUR-USERNAME with your GitHub username
git remote add origin https://github.com/YOUR-USERNAME/divya-signature-boutique.git
git branch -M main
git push -u origin main
```

### Step 6: Deploy to Netlify
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Click "GitHub" and authorize
4. Select `divya-signature-boutique`
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
6. Click "Deploy site"

### Step 7: Get Your Live URL! 🎉
- Your site will be live at: `https://random-name.netlify.app`
- Click on the URL to view your site!

---

## 📝 What Was Created

✅ **netlify.toml** - Netlify configuration
✅ **.gitignore** - Files to exclude from Git
✅ **README.md** - Project documentation
✅ **_redirects** - URL redirects
✅ **DEPLOYMENT.md** - Detailed deployment guide

---

## ⚠️ Important Notes

### Frontend-Only Deployment
The site will deploy as a **static website**. 

**What Works:**
- ✅ All pages (Home, Products, Cart, etc.)
- ✅ Shopping cart (localStorage)
- ✅ Navigation and UI
- ✅ Responsive design
- ✅ Product browsing

**What Needs Backend:**
- ❌ Login/Signup (requires server)
- ❌ User authentication
- ❌ Saving orders to database

### To Enable Login/Signup:

**Option 1: Deploy Backend Separately**
1. Deploy `server.js` to [Render](https://render.com) or [Railway](https://railway.app)
2. Update API URLs in `login.html` and `signup.html`

**Option 2: Use Without Authentication**
Remove login requirement:
- Cart and checkout will work without login
- Orders stored in browser only

---

## 🎨 Customize Your Site

### Change Site Name in Netlify:
1. Go to "Site settings"
2. Click "Change site name"
3. Enter: `divya-signature` (if available)
4. New URL: `divya-signature.netlify.app`

### Add Custom Domain:
1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Netlify: "Domain settings" → "Add custom domain"
3. Follow DNS setup instructions

---

## 🔄 Update Your Site

After making changes:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

Netlify will automatically redeploy! ⚡

---

## 🆘 Troubleshooting

**Error: "git not recognized"**
- Install Git: https://git-scm.com/downloads
- Restart your terminal

**Error: "Permission denied"**
- Check GitHub credentials
- Use HTTPS URL, not SSH

**Site not updating**
- Check Netlify deploy logs
- Clear browser cache
- Wait 1-2 minutes for deployment

**Images not showing**
- Verify `cover_images` folder is committed
- Check image paths are relative

---

## 📞 Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Git Guide**: https://git-scm.com/book/en/v2
- **GitHub Guide**: https://guides.github.com

---

## ✅ Success Checklist

- [ ] Git installed
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Site deployed on Netlify
- [ ] Live URL working
- [ ] All pages accessible
- [ ] Mobile responsive
- [ ] Cart functionality working

---

**Congratulations! Your site is live! 🎉**

Share your URL: `https://your-site-name.netlify.app`

