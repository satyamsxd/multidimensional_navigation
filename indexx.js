const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve indexx.html when accessing "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'indexx.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
