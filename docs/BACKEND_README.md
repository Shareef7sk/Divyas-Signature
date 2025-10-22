# Divya's Signature - Backend Authentication System

A complete authentication system for Divya's Signature Designer website with signup, signin, and JWT-based authentication.

## 📋 Features

- ✅ User Registration (Sign Up)
- ✅ User Login (Sign In)
- ✅ Password Hashing with bcrypt
- ✅ JWT Token Authentication
- ✅ Remember Me functionality
- ✅ User Profile Management
- ✅ File-based JSON database
- ✅ Beautiful, responsive UI
- ✅ Form validation
- ✅ Error handling

## 🚀 Quick Start

### Prerequisites

Make sure you have **Node.js** installed on your computer.
- Download from: https://nodejs.org/
- Recommended version: 18.x or higher

### Installation Steps

1. **Open your terminal/command prompt** and navigate to your project folder:
   ```bash
   cd C:\Documents\my_site\div_page
   ```

2. **Install the required packages**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

4. **Open your browser** and go to:
   ```
   http://localhost:3000/index.html
   ```

## 📁 Project Structure

```
div_page/
├── index.html              # Main homepage
├── login.html              # Login page
├── signup.html             # Sign up page
├── New_in.html            # Products page
├── server.js              # Backend server (Node.js + Express)
├── package.json           # Project dependencies
├── users.json             # User database (created automatically)
├── cover_images/          # Cover images folder
│   └── cover_image.jpeg
└── BACKEND_README.md      # This file
```

## 🔧 How It Works

### 1. Sign Up Flow

1. User fills out the registration form on `signup.html`
2. Frontend sends data to `/api/signup` endpoint
3. Backend validates the data:
   - Checks if email already exists
   - Validates email format
   - Ensures password is at least 8 characters
4. Password is hashed using bcrypt
5. User is saved to `users.json`
6. Success message shown, then redirected to login

### 2. Sign In Flow

1. User enters email and password on `login.html`
2. Frontend sends credentials to `/api/signin` endpoint
3. Backend verifies:
   - User exists
   - Password matches (using bcrypt compare)
4. JWT token is generated (valid for 24h or 30 days if "Remember me" is checked)
5. Token and user data stored in browser's localStorage
6. User redirected to homepage

### 3. Authentication

- JWT token is stored in `localStorage`
- Token is sent with protected API requests
- Token expires after 24 hours (or 30 days with "Remember me")

## 🌐 API Endpoints

### Public Endpoints

#### Health Check
```
GET /api/health
Returns: { status: 'OK', message: 'Server is running' }
```

#### Sign Up
```
POST /api/signup
Body: {
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",     // Optional
  "password": "password123"
}
Returns: { success: true, message: '...', user: {...} }
```

#### Sign In
```
POST /api/signin
Body: {
  "email": "john@example.com",
  "password": "password123",
  "remember": true            // Optional
}
Returns: { success: true, token: '...', user: {...} }
```

### Protected Endpoints (Require JWT Token)

#### Get User Profile
```
GET /api/profile
Headers: { "Authorization": "Bearer YOUR_JWT_TOKEN" }
Returns: { success: true, user: {...} }
```

#### List All Users (Development Only)
```
GET /api/users
Returns: { success: true, users: [...] }
```

## 🔐 Security Features

1. **Password Hashing**: Passwords are hashed using bcrypt with 10 salt rounds
2. **JWT Tokens**: Secure token-based authentication
3. **Input Validation**: All inputs are validated on both frontend and backend
4. **CORS Enabled**: Configured for cross-origin requests
5. **No Plain Text Passwords**: Passwords are never stored or transmitted in plain text

## 💾 Database

Currently uses a **JSON file-based database** (`users.json`) for simplicity.

### Sample User Record
```json
{
  "id": "1729512345678",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "password": "$2a$10$hashed_password_here",
  "createdAt": "2024-10-21T10:30:00.000Z"
}
```

### Upgrading to a Real Database

For production, consider migrating to:
- **MongoDB** - NoSQL database
- **PostgreSQL** - SQL database
- **MySQL** - SQL database
- **Firebase** - Cloud database

## 🎨 Frontend Pages

### Login Page (`login.html`)
- Email and password fields
- Remember me checkbox
- Forgot password link
- Social login buttons (Google, Facebook)
- Link to signup page

### Signup Page (`signup.html`)
- First name and last name
- Email address
- Phone number (optional)
- Password with strength requirements
- Confirm password
- Terms & conditions agreement
- Link to login page

## 🛠️ Development

### Running in Development Mode

For auto-restart on file changes:

1. Install nodemon globally:
   ```bash
   npm install -g nodemon
   ```

2. Run in dev mode:
   ```bash
   npm run dev
   ```

### Testing the API

You can test the API using:

1. **Browser Console** (F12)
   ```javascript
   fetch('http://localhost:3000/api/health')
     .then(r => r.json())
     .then(console.log)
   ```

2. **Postman** or **Insomnia** (API testing tools)

3. **cURL** (Command line)
   ```bash
   curl http://localhost:3000/api/health
   ```

## 📝 Common Tasks

### View All Users
```javascript
// Run in browser console
fetch('http://localhost:3000/api/users')
  .then(r => r.json())
  .then(data => console.log(data.users))
```

### Check If Server Is Running
```javascript
fetch('http://localhost:3000/api/health')
  .then(r => r.json())
  .then(console.log)
```

### Clear All Users (Reset Database)

Delete the `users.json` file or replace its content with:
```json
[]
```

## 🐛 Troubleshooting

### Server Won't Start

**Problem**: `Error: Cannot find module 'express'`
```bash
npm install
```

**Problem**: Port 3000 is already in use
- Change the PORT in `server.js` (line 7)
- Or stop the other process using port 3000

### Login Not Working

1. Make sure the server is running (`npm start`)
2. Check browser console for errors (F12)
3. Verify the user exists in `users.json`
4. Clear browser cache and localStorage

### CORS Errors

If you get CORS errors:
1. Make sure server is running on `localhost:3000`
2. Check that CORS is enabled in `server.js`
3. Try opening the page through the server: `http://localhost:3000/login.html`

## 📦 Dependencies

| Package       | Version | Purpose                           |
|---------------|---------|-----------------------------------|
| express       | ^4.18.2 | Web server framework              |
| cors          | ^2.8.5  | Enable CORS                       |
| bcryptjs      | ^2.4.3  | Password hashing                  |
| jsonwebtoken  | ^9.0.2  | JWT token generation/verification |
| nodemon       | ^3.0.1  | Auto-restart server (dev)         |

## 🚀 Deployment

For production deployment:

1. **Change JWT Secret**: Use environment variable
   ```javascript
   const JWT_SECRET = process.env.JWT_SECRET || 'your-secret';
   ```

2. **Use Real Database**: Migrate from JSON file to MongoDB/PostgreSQL

3. **Add HTTPS**: Use SSL certificates

4. **Environment Variables**: Store sensitive config in `.env`

5. **Add Rate Limiting**: Prevent brute force attacks

6. **Deploy to Cloud**:
   - Heroku
   - Vercel
   - AWS
   - DigitalOcean
   - Railway

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review the server logs in the terminal
3. Check browser console for errors (F12)

## 📄 License

MIT License - Feel free to use for your project!

---

**Created for Divya's Signature Designer** ✨
Backend authentication system with Node.js, Express, and JWT.

