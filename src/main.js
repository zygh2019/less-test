import Vue from 'vue'
import App from './App.vue'
// main.js
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import "./assets/css/headerLeftIcon.css"
import "./assets/css/headerRightIcon.css"
Vue.use(Vant);

Vue.use(Lazyload)
Vue.config.productionTip = false
new Vue({
	render: h => h(App)
}).$mount('#app')
