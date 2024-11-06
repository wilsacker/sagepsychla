const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

// Set Handlebars as the templating engine
app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('pages/home', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About Us' });
});

app.get('/services', (req, res) => {
    res.render('pages/services', { title: 'Our Services' });
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact Us' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});