<template>
    <div class="news-list">
        <li v-for="item in newsList" @click="getIntoDetails(item)">
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
    methods: {
        getIntoDetails(item) {
            this.$store.dispatch('getIntoDetails', item);
        }
    },
    computed: mapGetters([
        'newsList'
    ]),
    mounted() {
        this.$store.state.currentType = 'sport'
        this.$store.dispatch('fetchNews');
        console.log('sport mounted');
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
    padding: 8px;
}
.news-list li img {
    display: block;
    width: 80px;
    height: 80px;
    float: left;
}
.news-list li .news-list-inner {
    position: relative;
    padding-left: 90px;
    height: 80px;
    width: auto;
}
.news-list li .news-list-inner h2 {
    margin-top: 0;
    font-size: .8em;
}
.news-list li .news-list-inner p {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: .8em;
}
</style>
