const fs = require('fs');
const p = require('path');

const src = p.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(src).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = p.join(src, f);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('wave-line-shadow.png')) {
    // 1. Replace the wave lines and gradient
    const regex = /<div className="absolute inset-0 bg-\[radial-gradient\(circle_at_top_right,rgba\(55,114,255,0\.15\),transparent\)\] pointer-events-none z-0" \/>[\s\n]*<img[\s\n]*src="\/assets\/images\/shapes\/wave-line-shadow\.png"[\s\n]*alt="Wave Background"[\s\n]*className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"[\s\n]*\/>/g;
    
    // Replace
    let newContent = content.replace(regex, '<PageBannerBg />');

    // If replace failed due to regex not matching exactly, fallback:
    if (newContent === content) {
      console.log('Regex did not match in', f, 'using fallback string replacement');
      const searchStr = `<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(55,114,255,0.15),transparent)] pointer-events-none z-0" />
        <img 
          src="/assets/images/shapes/wave-line-shadow.png" 
          alt="Wave Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
        />`;
      newContent = content.replace(searchStr, '<PageBannerBg />');
    }

    // 2. Add the import
    if (!newContent.includes('PageBannerBg')) {
      const importRegex = /import .* from ".*";/g;
      let lastIndex = 0;
      let match;
      while ((match = importRegex.exec(newContent)) !== null) {
        lastIndex = importRegex.lastIndex;
      }
      
      const importStmt = '\nimport PageBannerBg from "../components/interactive/PageBannerBg";\n';
      if (lastIndex === 0) {
        newContent = importStmt + newContent;
      } else {
        newContent = newContent.slice(0, lastIndex) + importStmt + newContent.slice(lastIndex);
      }
    }

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated', f);
  }
});
