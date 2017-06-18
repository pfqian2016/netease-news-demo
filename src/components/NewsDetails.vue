<template>
    <div class="news-details">
        <div class="toolbar">
            <i class="fa fa-angle-left fa-5x" @click="back"></i>
            <i class="fa fa-4x" :class="{'fa-heart':isFavorite,'fa-heart-o':!isFavorite}"  @click="favor"></i>
        </div>
        <div class="details">
            <div class="details-header">
                <h1 v-text="newsDetails.title"></h1>
                <p v-text="newsDetails.from"></p>
                <p v-text="newsDetails.time"></p>
            </div>
            <div class="details-content" v-html="newsDetails.content">
            </div>
            <a :href="newsDetails.docurl">Original Website</a>
        </div>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        computed: mapState([
            'newsDetails'
        ]),
        methods: {
            favor() {
                this.isFavorite = !this.isFavorite
            },
            back() {
                this.$store.state.isNewsDetailsShown = false;
                this.$store.state.detailedNews = {};
            }
        },
        data() {
            return {
                isFavorite: false
            }
        }
    }
</script>
<style scoped>
    .news-details {
        width: 100vw;
        height: 100vh;
        background-color: #fff;
    }
    .news-details .toolbar {
        position: fixed;
        width: 100%;
        height: auto;
        background-color: #fff;
        padding: 20px;
        border-bottom: 1px solid #777;
    }
    .toolbar .fa-angle-left {
        display: inline-block;
        text-align: center;
        width: 60px;
        color: #42b983;
    }
    .toolbar .fa-heart,
    .toolbar .fa-heart-o {
        position: absolute;
        right: 80px;
        top: 30px;
    }
    .toolbar .fa-heart {
        color: #f00;
    }
    .news-details .details {
        padding: 18px;
        padding-top: 6.4em;
        overflow-y: scroll;
    }
    .news-details .details .details-header h1 {
        margin-bottom: 0;
        font-size: 2em;
    }
    .news-details .details .details-header p {
        margin: 15px 0;
        font-size: .6em;
    }
</style>
