const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const JWT_SECRET = 'divya-signature-secret-key-2024'; // In production, use environment variable
const USERS_FILE = path.join(__dirname, 'users.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files

// Initialize users file if it doesn't exist
async function initializeUsersFile() {
    try {
        await fs.access(USERS_FILE);
    } catch {
        await fs.writeFile(USERS_FILE, JSON.stringify([], null, 2));
        console.log('Created users.json file');
    }
}

// Read users from file
async function readUsers() {
    try {
        const data = await fs.readFile(USERS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading users:', error);
        return [];
    }
}

// Write users to file
async function writeUsers(users) {
    try {
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error writing users:', error);
        throw error;
    }
}

// Find user by email
async function findUserByEmail(email) {
    const users = await readUsers();
    return users.find(user => user.email.toLowerCase() === email.toLowerCase());
}

// ==================== ROUTES ====================

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Sign Up Route
app.post('/api/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password } = req.body;

        // Validation
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please provide all required fields' 
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid email format' 
            });
        }

        // Password validation (at least 8 characters)
        if (password.length < 8) {
            return res.status(400).json({ 
                success: false, 
                message: 'Password must be at least 8 characters long' 
            });
        }

        // Check if user already exists
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ 
                success: false, 
                message: 'An account with this email already exists' 
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            firstName,
            lastName,
            email: email.toLowerCase(),
            phone: phone || '',
            password: hashedPassword,
            createdAt: new Date().toISOString()
        };

        // Add user to database
        const users = await readUsers();
        users.push(newUser);
        await writeUsers(users);

        // Don't send password back
        const { password: _, ...userWithoutPassword } = newUser;

        res.status(201).json({ 
            success: true, 
            message: 'Account created successfully',
            user: userWithoutPassword
        });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

// Sign In Route
app.post('/api/signin', async (req, res) => {
    try {
        const { email, password, remember } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please provide email and password' 
            });
        }

        // Find user
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid email or password' 
            });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid email or password' 
            });
        }

        // Create JWT token
        const tokenExpiry = remember ? '30d' : '24h';
        const token = jwt.sign(
            { 
                userId: user.id, 
                email: user.email 
            },
            JWT_SECRET,
            { expiresIn: tokenExpiry }
        );

        // Don't send password back
        const { password: _, ...userWithoutPassword } = user;

        res.json({ 
            success: true, 
            message: 'Login successful',
            token,
            user: userWithoutPassword
        });

    } catch (error) {
        console.error('Signin error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ 
            success: false, 
            message: 'Access token required' 
        });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ 
                success: false, 
                message: 'Invalid or expired token' 
            });
        }
        req.user = user;
        next();
    });
}

// Get current user profile (protected route)
app.get('/api/profile', authenticateToken, async (req, res) => {
    try {
        const user = await findUserByEmail(req.user.email);
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: 'User not found' 
            });
        }

        const { password: _, ...userWithoutPassword } = user;
        res.json({ 
            success: true, 
            user: userWithoutPassword 
        });

    } catch (error) {
        console.error('Profile error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

// Get all users (for testing - remove in production)
app.get('/api/users', async (req, res) => {
    try {
        const users = await readUsers();
        const usersWithoutPasswords = users.map(({ password, ...user }) => user);
        res.json({ 
            success: true, 
            users: usersWithoutPasswords 
        });
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

// Start server
initializeUsersFile().then(() => {
    app.listen(PORT, () => {
        console.log(`
╔════════════════════════════════════════════════╗
║                                                ║
║   Divya's Signature Backend Server             ║
║                                                ║
║   Server running on: http://localhost:${PORT}   ║
║                                                ║
║   API Endpoints:                               ║
║   - POST /api/signup    (Create account)       ║
║   - POST /api/signin    (Login)                ║
║   - GET  /api/profile   (Get user profile)     ║
║   - GET  /api/users     (List all users)       ║
║                                                ║
║   Frontend: http://localhost:${PORT}/index.html  ║
║                                                ║
╚════════════════════════════════════════════════╝
        `);
    });
});

// Handle server errors
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ 
        success: false, 
        message: 'Something went wrong!' 
    });
});

