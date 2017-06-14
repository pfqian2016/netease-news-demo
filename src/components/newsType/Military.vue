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
    export default {
        data() {
            return {
                newsList: [],
                currentType: 'war',
                queryPage: 1
            }
        },
        methods: {
            fetchNews() {
                let xhr = new XMLHttpRequest();
                let url = 'http://wangyi.butterfly.mopaasapp.com/news/api?type='
                          + this.currentType
                          + '&page='
                          + this.queryPage
                          + '&limit=10';
                xhr.open('GET',url, true);
                xhr.onreadystatechange = () => {
                    if(xhr.readyState === 4) {
                        if(xhr.status === 200 || xhr.status === 304) {
                            let lists = JSON.parse(xhr.responseText).list;
                            for(let i = 0; i < lists.length; i++) {
                                this.newsList.push(lists[i]);
                            }
                            this.queryPage++;
                        }
                    }
                };
                xhr.send(null);
            }
        },
        mounted() {
            this.fetchNews();
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
