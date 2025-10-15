const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Home page
router.get('/', async (req, res) => {
try {
if (req.isAuthenticated()) {
const products = await Product.find({});    
res.render('index', { user: req.user, products} );

}    
} catch (err) {
console.error(err);
res.status(500).send('Server Error');
}
});


router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      res.render('dashboard', { user: req.user });
    } else {
      res.redirect('/auth/login');
    }
  });
  
// Add Product page (for simplicity, assume admin adds products directly)
router.get('/add-product', (req, res) => res.render('add-product'));

// Add Product Handle
router.post('/add-product', async (req, res) => {
const { name, price, description } = req.body;
try {
const newProduct = new Product({
name,
price,
description,
});

await newProduct.save();
res.redirect('/');
} catch (err) {
console.error(err);
res.status(500).send('Server Error');
}
});

router.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
      res.render('dashboard', { user: req.user });
    } else {
      res.redirect('/auth/login');
    }
  });
  

 
// Export the router object
module.exports = router;