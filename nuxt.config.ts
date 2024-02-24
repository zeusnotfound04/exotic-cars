// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/',
    head: {
      title: "Miami Exotic Cars" || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', type: "text/css", href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap' },
      ],  
      script: [
        {src:"js/jquery.min.js"},
        {src:"js/jquery-migrate-3.0.1.min.js"},
        {src:"js/popper.min.js"},
        {src:"js/bootstrap.min.js"},
        {src:"js/jquery.easing.1.3.js"},
        {src:"js/jquery.waypoints.min.js"},
        {src:"js/jquery.stellar.min.js"},
        {src:"js/owl.carousel.min.js"},
        {src:"js/jquery.magnific-popup.min.js"},
        {src:"js/aos.js"},
        {src:"js/jquery.animateNumber.min.js"},
        {src:"js/bootstrap-datepicker.js"},
        {src:"js/jquery.timepicker.min.js"},
        {src:"js/scrollax.min.js"},
      ],
    },
  },
  ssr: false,

  modules: [
    // ...
    // '@nuxt/ui',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore',
        ],
      },
    ],
    '@nuxt/ui',
    // '@nuxtjs/date-fns',
    // '@nuxtjs/pwa',
    '@vite-pwa/nuxt',
    // '@nuxtjs/axios'
    
  ],
  pwa: {
    /* your pwa options */
  },
  // axios: {
  //   // proxy: true
  // },
  plugins:[
    // { src : '~/plugins/bootstrap.js', mode:'client' }
    { src: "~/plugins/vue-notification.js",  ssr: false },
    { src: '~/plugins/fontawesome.js', mode: 'client' }
  ],
  runtimeConfig: {
    // The private keys which are only available server-side
    
    // Keys within public are also exposed client-side
    public: {
      apiDomain: 'http://192.168.10.12/',
      apiBase: 'api'
    }
  },
  routeRules: {
    '/api/**': {
        proxy: { to: "http://localhost:3002/api/**", },
    }
  }
});