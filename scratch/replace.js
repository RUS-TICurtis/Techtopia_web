const fs = require('fs');
const p = require('path');

const src = p.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(src).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = p.join(src, f);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('wave-line-shadow.png')) {
    // 1. Replace the wave lines and gradient
    const regex = /<div className="absolute inset-0 bg-\[radial-gradient\(circle_at_top_right,rgba\(55,114,255,0\.15\),transparent\)\] pointer-events-none z-0" \/>\s*<img\s*src="\/assets\/images\/shapes\/wave-line-shadow\.png"\s*alt="Wave Background"\s*className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"\s*\/>/g;
    
    // Some files might have it formatted slightly differently, let's try a safer replace
    // Instead, let's just find the section tag and replace its children
    // <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
    
    // Actually, we can just replace the exact text
    content = content.replace(regex, '<PageBannerBg />');

    // 2. Add the import
    if (!content.includes('PageBannerBg')) {
      // Find the last import statement
      const importRegex = /import .* from ".*";/g;
      let lastIndex = 0;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        lastIndex = importRegex.lastIndex;
      }
      
      const importStmt = '\nimport PageBannerBg from "../components/interactive/PageBannerBg";\n';
      if (lastIndex === 0) {
        content = importStmt + content;
      } else {
        content = content.slice(0, lastIndex) + importStmt + content.slice(lastIndex);
      }
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', f);
  }
});
