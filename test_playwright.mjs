import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log('BROWSER_LOG:', msg.type(), msg.text());
  });

  page.on('pageerror', error => {
    console.log('PAGE_ERROR:', error.message);
  });

  try {
    await page.goto('http://127.0.0.1:3282', { waitUntil: 'networkidle' });
    console.log('Page loaded successfully');
    
    await new Promise(r => setTimeout(r, 1000));
    
    // Check if vite-error-overlay exists in shadow DOM or light DOM
    const viteError = await page.evaluate(() => {
      const overlay = document.querySelector('vite-error-overlay');
      if (overlay && overlay.shadowRoot) {
        return overlay.shadowRoot.innerHTML;
      }
      return null;
    });
    if (viteError) {
      console.log('VITE ERROR:', viteError);
    }
    
    const rootHtml = await page.evaluate(() => {
      const root = document.getElementById('root');
      return root ? root.innerHTML : 'No root element found';
    });
    console.log('Root HTML length:', rootHtml.length);
  } catch (err) {
    console.error('Failed to load page:', err);
  } finally {
    await browser.close();
  }
})();
