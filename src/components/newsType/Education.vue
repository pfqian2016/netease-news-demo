<template>
    <div class="news-list">
        <li v-for="item in newsList">
            <img :src="item.imgurl">
            <div class="news-list-inner">
                <h2>{{item.title}}</h2>
                <p>{{item.time}}</p>
            </div>
        </li>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    computed: mapGetters([
        'newsList'
    ]),
    mounted() {
        this.$store.state.currentType = 'edu'
        this.$store.dispatch('fetchNews');
        console.log('edu mounted');
    }
}
</script>
<style scoped>
    .news-list {
        overflow-y: scroll;
        z-index: 1;
    }
    .news-list li {
        list-style-type: none;
        padding: 20px;
    }
    .news-list li img {
        display: block;
        width: 240px;
        height: 240px;
        float: left;
    }
    .news-list li .news-list-inner {
        position: relative;
        padding-left: 260px;
        height: 240px;
        width: auto;
    }
    .news-list li .news-list-inner h2 {
        margin-top: 0;
        font-size: 2.4em;
    }
    .news-list li .news-list-inner p {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 1.8em;
    }
</style>
