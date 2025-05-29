export default defineNuxtPlugin(() => {
  if (process.client) {
    const gtagId = 'G-XXXXXXXXXX';
    
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', gtagId);
  }
});
