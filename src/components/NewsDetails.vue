<template>
    <div class="news-details">
        <div class="toolbar">
            <i class="fa fa-angle-left fa-2x" @click="back"></i>
            <i class="fa fa-2x" :class="{'fa-heart':isFavorite,'fa-heart-o':!isFavorite}"  @click="favor"></i>
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
            'newsDetails',
            'isFavorite'
        ]),
        methods: mapActions([
            'favor',
            'back'
        ])
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
        padding: 10px;
        border-bottom: 1px solid #777;
    }
    .toolbar .fa-angle-left {
        display: inline-block;
        text-align: center;
        width: 40px;
        color: #42b983;
    }
    .toolbar .fa-heart,
    .toolbar .fa-heart-o {
        position: absolute;
        right: 30px;
        top: 10px;
    }
    .toolbar .fa-heart {
        color: #f00;
    }
    .news-details .details {
        padding: 10px;
        padding-top: 3em;
        overflow-y: scroll;
    }
    .news-details .details .details-header h1 {
        margin-bottom: 0;
        font-size: 1.2em;
    }
    .news-details .details .details-header p {
        margin: 15px 0;
        font-size: .6em;
    }
</style>
