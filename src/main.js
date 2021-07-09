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

// CKEditor
import CKEditor from '@ckeditor/ckeditor5-vue';

// VueSweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue';
import router from './router';

// setting VueSweetalert2
const options = {
  showConfirmButton: false,
  timer: 1500,
  position: 'top',
  toast: true,
  width: '240px',
};

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .use(CKEditor)
  .use(VueSweetalert2, options)
  .component('Loading', Loading)
  .mount('#app');
