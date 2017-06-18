<template>
    <div id="app">
        <NewsDetails v-if="isNewsDetailsShown"></NewsDetails>
        <div class="main" v-else>
            <MyHeader v-if="showHeader"></MyHeader>
            <router-view></router-view>
            <MyNav></MyNav>
        </div>
    </div>
</template>

<script>
import MyNav from './components/MyNav.vue'
import MyHeader from './components/MyHeader.vue'
import NewsDetails from './components/NewsDetails.vue'
import {mapState} from 'vuex'

export default {
    name: 'app',
    components: {
        MyNav,MyHeader,NewsDetails
    },
    computed: mapState([
      'showHeader',
      'isNewsDetailsShown'
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
