const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

// Serve static files (e.g., index.html)
app.use(express.static(path.join(__dirname)));

// File upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
