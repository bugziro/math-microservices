const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints
app.get('/api/square', (req, res) => {
    const num = parseInt(req.query.number || 0);
    res.json({ number: num, square: num * num });
});

app.get('/api/cube', (req, res) => {
    const num = parseInt(req.query.number || 0);
    res.json({ number: num, cube: num * num * num });
});

app.listen(PORT, () => {
    console.log(`Math microservice running on http://localhost:${PORT}`);
});