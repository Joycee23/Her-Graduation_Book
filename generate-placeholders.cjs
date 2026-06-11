const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate beautiful SVG placeholder images
const images = [
  { name: 'ch1-1.jpg', label: 'Ngày đầu tiên đến trường', emoji: '🎒', color1: '#1a2d42', color2: '#243b55' },
  { name: 'ch1-2.jpg', label: 'Những trang sách', emoji: '📚', color1: '#1a2d42', color2: '#2d1a42' },
  { name: 'ch1-3.jpg', label: 'Giảng đường thân yêu', emoji: '🏫', color1: '#1a2d42', color2: '#1a3d2d' },
  { name: 'year1.jpg', label: 'Năm Nhất 🌱', emoji: '🌱', color1: '#1a2d1a', color2: '#2d4220' },
  { name: 'year2.jpg', label: 'Năm Hai 📖', emoji: '📖', color1: '#1a1a2d', color2: '#252045' },
  { name: 'year3.jpg', label: 'Năm Ba ✨', emoji: '✨', color1: '#2d1a2d', color2: '#452045' },
  { name: 'year4.jpg', label: 'Năm Tư 🎓', emoji: '🎓', color1: '#2d2a1a', color2: '#453820' },
  { name: 'graduation.jpg', label: 'Ngày Tốt Nghiệp 🌸', emoji: '🌸', color1: '#2d1a1a', color2: '#451a20' },
];

images.forEach(({ name, label, emoji, color1, color2 }) => {
  const svg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${color1}"/>
      <stop offset="100%" stop-color="${color2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#d4a853" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#d4a853" stop-opacity="0"/>
    </radialGradient>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="600" fill="url(#bg)"/>
  <rect width="800" height="600" fill="url(#glow)"/>
  
  <!-- Decorative border -->
  <rect x="20" y="20" width="760" height="560" fill="none" stroke="#d4a853" stroke-width="1" stroke-opacity="0.3" rx="8"/>
  <rect x="30" y="30" width="740" height="540" fill="none" stroke="#d4a853" stroke-width="0.5" stroke-opacity="0.15" rx="6"/>
  
  <!-- Corner decorations -->
  <path d="M20 60 L20 20 L60 20" stroke="#d4a853" stroke-width="2" stroke-opacity="0.5" fill="none"/>
  <path d="M780 60 L780 20 L740 20" stroke="#d4a853" stroke-width="2" stroke-opacity="0.5" fill="none"/>
  <path d="M20 540 L20 580 L60 580" stroke="#d4a853" stroke-width="2" stroke-opacity="0.5" fill="none"/>
  <path d="M780 540 L780 580 L740 580" stroke="#d4a853" stroke-width="2" stroke-opacity="0.5" fill="none"/>
  
  <!-- Stars/particles -->
  <circle cx="100" cy="100" r="2" fill="#d4a853" fill-opacity="0.4"/>
  <circle cx="250" cy="80" r="1.5" fill="#f0c878" fill-opacity="0.3"/>
  <circle cx="600" cy="120" r="2.5" fill="#d4a853" fill-opacity="0.3"/>
  <circle cx="700" cy="90" r="1.5" fill="#e8a0a8" fill-opacity="0.4"/>
  <circle cx="150" cy="450" r="2" fill="#f0c878" fill-opacity="0.3"/>
  <circle cx="650" cy="480" r="1.5" fill="#d4a853" fill-opacity="0.4"/>
  <circle cx="400" cy="150" r="1" fill="#d4a853" fill-opacity="0.5"/>
  <circle cx="350" cy="500" r="1.5" fill="#f0c878" fill-opacity="0.3"/>
  
  <!-- Emoji -->
  <text x="400" y="290" font-size="80" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
  
  <!-- Label -->
  <text x="400" y="380" font-size="22" text-anchor="middle" fill="#f0c878" font-family="Georgia, serif" font-style="italic">${label}</text>
  
  <!-- Gold divider line -->
  <line x1="300" y1="340" x2="500" y2="340" stroke="#d4a853" stroke-width="1" stroke-opacity="0.4"/>
  
  <!-- Placeholder instruction -->
  <text x="400" y="430" font-size="13" text-anchor="middle" fill="#d4a853" font-family="Arial, sans-serif" fill-opacity="0.5">Thêm ảnh thật vào thư mục public/images/</text>
  <text x="400" y="450" font-size="11" text-anchor="middle" fill="#d4a853" font-family="Arial, sans-serif" fill-opacity="0.35">${name}</text>
</svg>`;

  fs.writeFileSync(path.join(imagesDir, name), svg);
  console.log(`Created: ${name}`);
});

console.log('\n✅ All placeholder images created in public/images/');
console.log('📸 To add real photos: replace files in public/images/ with the same filenames');
