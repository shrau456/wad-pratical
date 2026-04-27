const express = require('express');
const router = express.Router();
const path = require('path');

// Home
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/home.html'));
});

// About
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/about.html'));
});

// Contact
router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});

module.exports = router;