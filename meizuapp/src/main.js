import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Popup} from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Stepper } from 'vant';
import { Dialog } from 'vant';
import Swiper from 'swiper'
import  '@/swiper/js/swiper.min.js'
import  '@/swiper/css/swiper.min.css'

import axios from 'axios';
Vue.prototype.$axios = axios;

import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);

Vue.use(Stepper);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Popup);
Vue.use(Dialog);

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue();
Vue.use('Swiper')

new Vue({
  router,
  SlideVerify,
  store,
  render: h => h(App)
}).$mount('#app')
