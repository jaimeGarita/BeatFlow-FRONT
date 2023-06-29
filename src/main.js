import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app/App.vue';
import router from './router';
import VueCookies from 'vue-cookies';

Vue.use(ElementUI);
Vue.use(VueCookies);
Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: h => h(App)
});

app.$mount('#app');