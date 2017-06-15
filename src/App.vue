<template>
    <div id="app">
        <MyHeader v-if="isHeaderVisable"></MyHeader>
        <router-view></router-view>
        <MyNav></MyNav>
    </div>
</template>

<script>
import MyNav from './components/MyNav.vue'
import MyHeader from './components/MyHeader.vue'
import {mapGetters} from 'vuex'

export default {
    name: 'app',
    components: {
        MyNav,MyHeader
    },
    computed:mapGetters([
      'isHeaderVisable'
    ])
}
</script>

<style>
#app {
    width: 100%;
}
body {
    margin: 0;
    padding: 0;
}
</style>
