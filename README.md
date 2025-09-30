# TxPhotobooth - Professional Photo Studio

Ứng dụng photobooth chuyên nghiệp với khả năng chụp ảnh không giới hạn và áp dụng filter vintage.

## Tính năng chính

- 🎨 **Chụp ảnh không giới hạn**: Không giới hạn số lượng ảnh có thể chụp
- ⏱️ **Delay 8 giây**: Tự động chụp ảnh cách nhau 8 giây để tạo dáng
- 🖼️ **Filter vintage**: Nhiều bộ lọc màu sắc vintage đẹp mắt
- 💾 **Lưu tự động**: Ảnh được lưu tự động vào folder `vintage_output`
- 🎯 **Giao diện đơn giản**: Chỉ có 2 trang chính - Home và Vintage

## Cài đặt và chạy

### Cách 1: Sử dụng Python Server (Khuyến nghị)

1. Chạy server Python:
```bash
python -m http.server 8000
```

2. Mở trình duyệt và truy cập: `http://localhost:8000`

### Cách 2: Mở trực tiếp file HTML

1. Mở file `home.html` trực tiếp trong trình duyệt
2. Lưu ý: Một số tính năng có thể không hoạt động do hạn chế bảo mật của trình duyệt

## Cách sử dụng

1. **Trang chủ (Home)**: 
   - Chọn "Vintage Mode" để bắt đầu chụp ảnh

2. **Trang Vintage**:
   - Chọn filter mong muốn từ danh sách
   - Nhấn "Start" để bắt đầu chụp ảnh liên tục
   - Nhấn "Stop" để dừng chụp ảnh
   - Nhấn "← Back" để quay lại trang chủ

## Cấu trúc thư mục

```
ptb/
├── home.html              # Trang chủ
├── vintage.html           # Trang chụp ảnh vintage
├── package.json           # Dependencies
├── vintage_output/        # Folder lưu ảnh (tự động tạo)
├── filter/                # Các file filter .cube
│   ├── bw.CUBE
│   ├── no1.cube
│   ├── no2.cube
│   └── ...
└── frames/                # Các khung ảnh
    ├── 1.png
    ├── goc.png
    └── ...
```

## Tính năng kỹ thuật

- **Camera**: Sử dụng WebRTC để truy cập camera
- **Filter**: Hỗ trợ file .cube cho color grading
- **Lưu trữ**: Ảnh được tải xuống tự động với chất lượng PNG cao
- **Responsive**: Tương thích với mọi kích thước màn hình

## Lưu ý

- Cần quyền truy cập camera để sử dụng
- Ảnh được tải xuống tự động với tên file có timestamp
- Hỗ trợ các trình duyệt hiện đại (Chrome, Firefox, Safari, Edge)

## Phát triển bởi

**Tiva Solutions** - Chuyên cung cấp phần mềm photobooth chuyên nghiệp và giải pháp công nghệ hiện đại.

- 📞 Hotline: 0395 458 706
- 📧 Email: info@tivasolutions.com
- 🌐 Website: [Tiva Solutions](https://tivasolutions.com)
