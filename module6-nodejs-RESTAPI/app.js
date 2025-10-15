const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/item'); // Import Item Model
const User = require('./models/user'); // Import User model
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const app = express();
// Middleware
//app.use(bodyParser.json());
app.use(bodyParser.json());
// Middleware to parse incoming JSON data
app.use(express.json());
// MongoDB connection setup
mongoose.connect('mongodb://127.0.0.1:27017/CrudrestApiApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// POST API to add a user to the database
app.post('/addusers', async (req, res) => {
  console.log('Request Body:', req.body);  // Log the incoming request body
  const { name, email, phone, pin, age, address } = req.body;

  // Validation: Ensure all required fields are provided
  if (!name || !email || !phone || !pin || !age || !address) {
    return res.status(400).json({
      message: 'Missing required fields: name, email, phone, pin, age, and address are required.'
    });
  }

  try {
    // Create a new item with the provided data
    const item = new Item(req.body);
    await item.save();
    // Respond with the saved item
    res.status(201).json(item);
  } catch (err) {
    console.error('Error while creating user:', err);
    res.status(400).json({
      message: 'Error creating user.',
      error: err.message
    });
  }
});
// get all users data
app.get('/addusers', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching users', error: err });
  }
});

// READ or Get one users data by its ID (GET one by ID)
app.get('/addusers/:id', async (req, res) => {
  try {
    const items = await Item.findById(req.params.id);
    if (!items) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching user', error: err });
  }
});

// UPDATE users data (PUT)
app.put('/addusers/:id', async (req, res) => {
  try {
    const items = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!items) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({ message: 'Error updating user', error: err });
  }
});

// DELETE particulars users from Id
app.delete('/addusers/:id', async (req, res) => {
  try {
    const items = await Item.findByIdAndDelete(req.params.id);
    if (!items) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting user', error: err });
  }
});


// user authentications Register and Login via jwt

// User Registration
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// User Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

// Middleware for protecting routes (authentication)
// const authenticate = (req, res, next) => {
//   const token = req.header('Authorization')?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ error: 'Access denied. No token provided.' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(400).json({ error: 'Invalid token' });
//   }
// };



// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
