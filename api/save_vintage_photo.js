const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Chỉ cho phép POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Kiểm tra xem có file được upload không
    if (!req.body || !req.body.photo) {
      return res.status(400).json({ error: 'No photo data received' });
    }

    // Tạo thư mục vintage_output nếu chưa tồn tại
    const outputDir = path.join(process.cwd(), 'vintage_output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Tạo tên file với timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `vintage_${timestamp}.png`;
    const filepath = path.join(outputDir, filename);

    // Lưu file ảnh
    const photoData = req.body.photo;
    const base64Data = photoData.replace(/^data:image\/png;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    
    fs.writeFileSync(filepath, buffer);

    // Trả về response thành công
    return res.status(200).json({ 
      success: true, 
      message: 'Photo saved successfully',
      filename: filename,
      path: `/vintage_output/${filename}`
    });

  } catch (error) {
    console.error('Error saving photo:', error);
    return res.status(500).json({ 
      error: 'Failed to save photo',
      details: error.message 
    });
  }
};
