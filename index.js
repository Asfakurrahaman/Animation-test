const express = require('express');
const path = require('path');
const nomemon = require('nodemon');

const app = express();
const port = 3000;

// Set up static files (CSS, JS, etc.)
app.use('/', express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
