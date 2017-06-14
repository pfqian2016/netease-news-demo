import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routerConfig from './router/route.config.js'
import router from './router/'
import store from './store/'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
