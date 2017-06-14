<template>
    <div id="app">
        <MyHeader></MyHeader>
        <router-view></router-view>
        <MyNav></MyNav>
    </div>
</template>

<script>
import MyNav from './components/MyNav.vue'
import MyHeader from './components/MyHeader.vue'

export default {
    name: 'app',
    components: {
        MyNav,MyHeader
    }
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
