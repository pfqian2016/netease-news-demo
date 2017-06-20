<template>
    <div class="favorites">
        <div class="toolbar">
            <i class="fa fa-angle-left fa-5x" @click="back"></i>
            <h1>Favorites</h1>
        </div>
        <div class="favorites-list">
            <li v-for="item in userInfo.favorites" @click="getIntoDetails(item)">
                <img :src="item.imgurl">
                <div class="favorites-list-inner">
                    <h2>{{item.title}}</h2>
                    <p>{{item.time}}</p>
                </div>
            </li>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'

    export default {
        computed: mapState([
            'userInfo'
        ]),
        methods: {
            back() {
                this.$router.replace({path: '/user'});
            },
            getIntoDetails(item) {
                this.$store.dispatch('getIntoDetails', item);
            }
        }
    }
</script>
<style scoped>
    .favorites {
        position: absolute;
        left: 0;
        top: 0;
        background-color: #fff;
        width: 100vw;
        height: 100vh;
        z-index: 101;
    }
    .favorites .toolbar {
        position: fixed;
        width: 100%;
        height: auto;
        background-color: #fff;
        padding: 20px;
        border-bottom: 1px solid #777;
    }
    .favorites .toolbar .fa-angle-left {
        display: inline-block;
        text-align: center;
        width: 60px;
        color: #42b983;
    }
    .favorites .toolbar h1 {
        position: absolute;
        left: calc(50% - 150px);
        top: 0;
        width: 300px;
        /*margin-left: calc(50% - 150px);*/
        font-size: 3em;
        color: #42b983;
    }
    .favorites .favorites-list {
        padding: 18px;
        padding-top: 7.4em;
        overflow-y: scroll;
    }
    .favorites-list li {
        list-style-type: none;
        padding: 20px;
    }
    .favorites-list li img {
        display: block;
        width: 240px;
        height: 240px;
        float: left;
    }
    .favorites-list li .favorites-list-inner {
        position: relative;
        padding-left: 260px;
        height: 240px;
        width: auto;
    }
    .favorites-list li .favorites-list-inner h2 {
        margin-top: 0;
        font-size: 2.4em;
    }
    .favorites-list li .favorites-list-inner p {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 1.8em;
    }
</style>
