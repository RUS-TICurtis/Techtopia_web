const fs = require('fs');
const p = require('path');
const src = p.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(src).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = p.join(src, f);
  let content = fs.readFileSync(filePath, 'utf8');

  const lines = content.split('\n');
  let changed = false;
  for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('import PageBannerBg from')) {
          lines[i] = 'import PageBannerBg from "../components/interactive/PageBannerBg";';
          changed = true;
      }
  }
  if (changed) {
      content = lines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed quotes in', f);
  }
});
