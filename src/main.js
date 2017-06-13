import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routerConfig from './router/route.config.js'
import router from './router/'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
