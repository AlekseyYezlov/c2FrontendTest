import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faExclamationCircle,
  faCheckCircle,
  faAngleRight,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faExclamationCircle,
  faCheckCircle,
  faAngleRight,
  faSearch,
  faTimes
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

import './styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
