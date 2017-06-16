<template>
    <div class="news-details">
        <div class="toolbar">
            <i class="fa fa-angle-left fa-5x"></i>
            <i class="fa fa-4x" :class="{'fa-heart':isFavorite,'fa-heart-o':!isFavorite}"  @click="favor"></i>
        </div>
        <div class="details">
            <div class="details-header">
                <h1>北京电报大楼关闭电报业务 通信人：一个时代结束</h1>
                <p>网易科技报道</p>
                <p>2017-06-26 11:42:58</p>
            </div>
            <div class="details-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed: mapGetters([
            'isNewsDetailsShown'
        ]),
        methods: {
            hideNewsDetails() {
                this.$store.state.isNewsDetailsShown = false;
            },
            favor() {
                this.isFavorite = !this.isFavorite
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
