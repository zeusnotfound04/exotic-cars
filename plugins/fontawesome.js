import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faUser, faSignInAlt);
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
