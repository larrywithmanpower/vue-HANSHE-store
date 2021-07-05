import { createApp } from 'vue';

// bootstrap
import 'bootstrap';

// axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// Import Swiper Vue.js components

// Import Swiper styles
import 'swiper/swiper.scss';

import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

// install Swiper modules

import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .component('Loading', Loading)
  .mount('#app');
