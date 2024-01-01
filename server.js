const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up static file serving
app.use(express.static(path.join(__dirname, 'portfolio')));

// Route for serving the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'sample.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
