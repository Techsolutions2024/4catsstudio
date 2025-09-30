const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Tạo folder vintage_output nếu chưa có
const vintageOutputDir = path.join(__dirname, 'vintage_output');
if (!fs.existsSync(vintageOutputDir)) {
    fs.mkdirSync(vintageOutputDir, { recursive: true });
}

// Cấu hình multer để lưu file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, vintageOutputDir);
    },
    filename: function (req, file, cb) {
        // Giữ nguyên tên file từ client
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Middleware để serve static files
app.use(express.static(__dirname));

// Route để lưu ảnh vintage
app.post('/save_vintage_photo', upload.single('photo'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No photo uploaded' });
    }
    
    console.log(`Photo saved: ${req.file.filename} in vintage_output folder`);
    res.json({ 
        success: true, 
        message: 'Photo saved successfully',
        filename: req.file.filename 
    });
});

// Route chính - serve home.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Route cho vintage photobooth
app.get('/vintage', (req, res) => {
    res.sendFile(path.join(__dirname, 'vintage.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Vintage photos will be saved to: ${vintageOutputDir}`);
});
