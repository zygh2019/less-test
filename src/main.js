import Vue from 'vue'
import App from './App.vue'
// main.js
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import "./assets/css/headerLeftIcon.less"
import "./assets/css/headerRightIcon.less"
Vue.use(Vant);

Vue.use(Lazyload)
Vue.config.productionTip = false
new Vue({
	render: h => h(App)
}).$mount('#app')
