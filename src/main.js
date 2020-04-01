import Vue from 'vue'
import VueRouter from "vue-router";
import App from '@/components/App'
import store from '@/store'
import router from '@/router'

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
});

store.dispatch('getTiles', store);
