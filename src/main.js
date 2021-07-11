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

// Vee-Validation主要套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// Vee-Validate rules
import AllRules from '@vee-validate/rules';
// Vee-Validate i18n
import { localize, setLocale } from '@vee-validate/i18n';
// import JSON設定黨
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

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

// Vee_validate基本設定
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});

// 強制設定中文
setLocale('zh_TW');

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .use(CKEditor)
  .use(VueSweetalert2, options)
  .component('Loading', Loading)
  .component('Form', Form)
  .component('Field', Field)
  .component('ErrorMessage', ErrorMessage)
  .mount('#app');
