export default defineNuxtPlugin(() => {
  if (process.client) {
    const GTM_ID = 'GTM-KQSQBP3B' // Replace with your actual GTM ID

    if (!document.getElementById('gtm-script')) {
      const script = document.createElement('script')
      script.id = 'gtm-script'
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `
      document.head.appendChild(script)
    }
  }
})
