import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css';

export default defineNuxtPlugin((nuxtApp) => {
    // library.add(faUser, faSignInAlt);
    nuxtApp.vueApp.component('Carousel', Carousel);
    nuxtApp.vueApp.component('Pagination', Pagination);
    nuxtApp.vueApp.component('Slide', Slide);
  });
  
  