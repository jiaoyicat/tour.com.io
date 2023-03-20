import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入reset.css文件
import "./assets/css/reset.css"
//引入fastclck.js
import FastClick from 'fastclick'
FastClick.attach(document.body);
//引入iconfonst.css
import "./assets/css/iconfont.css"
import 'vant/lib/index.css';
Vue.config.productionTip = false
import Vant,{Lazyload} from 'vant';
import { Grid, GridItem, Swipe, SwipeItem } from 'vant';

//引入axios
import axios from "axios"
Vue.prototype.$axios=axios
Vue.use(Lazyload).use(Swipe).use(SwipeItem).use(Vant).use(Grid).use(GridItem);
	new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
