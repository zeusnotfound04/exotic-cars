// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: "Miami Exotic Cars",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        { hid: 'og-image', property: 'og:image', content: 'https://miamiexotics.b-cdn.net/img/logo.png' },
        { name:"theme-color", content:"#ffffff"},
        { name:"google-site-verification", content:"Lq5PH6TMBO64FVZHKEcbyADxPr68BMyOTQFaA7HZKiU"}
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', type: "text/css", href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap' },
        { rel:"manifest", href:"/site.webmanifest"},
        { rel:"mask-icon", href:"safari-pinned-tab.svg", color:"#5bbad5"},
        { rel: 'stylesheet', type: "text/css", href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' },
        { rel: 'stylesheet', type: "text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ],
      script: [
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/jquery.min.js" },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/jquery-migrate-3.0.1.min.js", defer: true },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/popper.min.js" },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/bootstrap.min.js", defer: true },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/jquery.easing.1.3.js" },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/jquery.waypoints.min.js" },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/jquery.stellar.min.js", defer: true },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/owl.carousel.min.js", defer: true },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/jquery.magnific-popup.min.js" },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/aos.js", defer: true },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/jquery.animateNumber.min.js" },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/bootstrap-datepicker.js", defer: true },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/jquery.timepicker.min.js", defer: true },
        { tagPosition: 'bodyClose', src: "https://miamiexotics.b-cdn.net/js/scrollax.min.js", defer: true },
      ],
    },
  },
  ssr: false,

  modules: [
  // '@nuxtjs/pwa',
    '@nuxt/image',
    [
      '@pinia/nuxt',
      {
        autoImports: [
        // automatically imports `defineStore`
          'defineStore',
        ],
      },
    ],
  "@nuxtjs/seo"],
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   // https://pwa.nuxtjs.org/manifest
  //   // Manifest adds Web App Manifest with no pain.
  //   manifest: {
  //     name: "SportsWire",
  //     short_name: "SportsWire",
  //     description: "Up-to-date Sports News and Analysis App.",
  //     theme_color: "#6a5acd",
  //     lang: "en",
  //     background_color: "#6a5acd",
  //   },
  //   // https://pwa.nuxtjs.org/icon
  //   icon: {
  //     sizes: [64, 120, 144, 152, 192, 384, 512], //Array of sizes to be generated (Square).These are the default values
  //   },
  //   // https://pwa.nuxtjs.org/meta
  //   // Meta easily adds common meta tags into your project with zero-config needed. 
  //   meta: {
  //     name: "SportsWire",
  //     description: "Up-to-date Sports News and Analysis App.",
  //     author: "Vino Samari",
  //     theme_color: "#6a5acd",
  //     nativeUi: true,
  //     appleStatusBarStyle: "black",
  //     mobileAppIOS: true,
  //   },
  // },
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
      apiBase: 'api',
      GOOGLE_MAPS_API_KEY: 'AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s'
    },
  },
  routeRules: {
    '/api/**': {
        proxy: { to: "http://localhost:3002/api/**", },
    }
  },

  build: { transpile: [] },
  // build: { transpile: ["@fawmi/vue-google-maps"] },
  site: {
    url: 'https://miamiexoticrents.com',
    name: 'Miami Exotic Rents',
    description: 'Luxury car, yacht & property rentals in Miami. Drive premium vehicles, sail stunning yachts, and stay in exclusive homes. Book your Miami experience today.',
    defaultLocale: 'en',
    trailingSlash: false,
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
    canonicalQueryWhitelist: ['vehicle']
  }
});