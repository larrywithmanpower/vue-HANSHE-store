import { createApp } from 'vue';

// bootstrap
import 'bootstrap';

// axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .component('Loading', Loading)
  .mount('#app');
