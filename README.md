# 4Cats Vintage Photobooth

Ứng dụng photobooth vintage với hiệu ứng filter thời gian thực sử dụng LUT (Look-Up Table).

## ✨ Tính năng

- 📸 Chụp ảnh với webcam thời gian thực
- 🎨 Bộ lọc vintage đa dạng (B&W, Vintage, Warm, Custom)
- ⏱️ Countdown đếm ngược từ 8 giây
- 📱 Giao diện responsive, thân thiện với mobile
- 💾 Lưu ảnh tự động vào thư mục vintage_output
- 🎭 Hiệu ứng chụp ảnh chân thực (flash, shutter, shake)
- ⚙️ Quản lý filter tùy chỉnh

## 🚀 Deploy lên Vercel

### Cách 1: Deploy trực tiếp từ GitHub

1. **Fork repository này** hoặc tạo repository mới
2. **Push code lên GitHub**
3. **Truy cập [Vercel Dashboard](https://vercel.com/dashboard)**
4. **Click "New Project"**
5. **Import repository từ GitHub**
6. **Vercel sẽ tự động detect và deploy**

### Cách 2: Deploy bằng Vercel CLI

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Login vào Vercel
vercel login

# Deploy project
vercel

# Deploy production
vercel --prod
```

### Cách 3: Deploy từ thư mục local

1. **Tải toàn bộ project về máy**
2. **Mở terminal trong thư mục project**
3. **Chạy lệnh:**
   ```bash
   npx vercel
   ```
4. **Làm theo hướng dẫn trên terminal**

## 📁 Cấu trúc thư mục

```
4cats-photobooth/
├── api/
│   └── save_vintage_photo.js    # API xử lý lưu ảnh
├── filter/                      # Thư mục chứa file LUT
│   ├── bw.CUBE
│   ├── no1.cube
│   ├── no2.cube
│   └── WARM.CUBE
├── vintage_output/              # Thư mục lưu ảnh đã chụp
├── home.html                    # Trang chủ
├── vintage.html                 # Trang photobooth chính
├── vercel.json                  # Cấu hình Vercel
├── package.json                 # Cấu hình Node.js
└── README.md                    # File hướng dẫn
```

## ⚙️ Cấu hình Vercel

File `vercel.json` đã được cấu hình sẵn với:

- **Static file serving** cho HTML, CSS, JS
- **API routing** cho việc lưu ảnh
- **CORS headers** cho file LUT
- **Fallback routing** về home.html
- **File type detection** cho .cube files

## 🎨 Thêm Filter tùy chỉnh

1. **Tải file .cube hoặc .CUBE**
2. **Upload vào thư mục `filter/`**
3. **Restart ứng dụng**
4. **Filter sẽ xuất hiện trong danh sách**

## 📱 Sử dụng

1. **Mở trình duyệt và truy cập URL Vercel**
2. **Cho phép truy cập webcam**
3. **Chọn filter mong muốn**
4. **Click "Start" để bắt đầu chụp ảnh**
5. **Ứng dụng sẽ tự động chụp ảnh mỗi 8 giây**
6. **Ảnh được lưu tự động vào vintage_output**

## 🔧 Troubleshooting

### Lỗi webcam không hoạt động
- Đảm bảo đã cho phép truy cập webcam
- Sử dụng HTTPS (Vercel tự động cung cấp)
- Kiểm tra trình duyệt có hỗ trợ getUserMedia

### Lỗi lưu ảnh
- Kiểm tra quyền ghi file trong thư mục vintage_output
- Đảm bảo API endpoint hoạt động đúng

### Lỗi filter không load
- Kiểm tra file .cube có đúng format không
- Đảm bảo file được đặt trong thư mục filter/

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo Pull Request hoặc Issue.

---

**Tạo bởi 4Cats Team** 🐱