// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
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
        { rel: 'stylesheet', type: "text/css", href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', type: "text/css", href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap' },

        // <link href="" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        // { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" }
         { rel: "stylesheet", type: "text/css", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css" }
      ],  script: [
        // { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' },
        // { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' }
        {src : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'},
        // {src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"},

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
        // {src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"},
        // {src:"js/google-map.js"},
        {src:"js/main.js"},
      ],
    },
  },
  // css: ["bootstrap/dist/css/bootstrap.min.css"],
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
    // '@nuxtjs/pwa',
    '@vite-pwa/nuxt'
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