<template>
    <div class="messages">
        <div class="toolbar">
            <i class="fa fa-angle-left fa-2x" @click="back"></i>
            <h1>Messages</h1>
        </div>
        <div class="messages-list">
            <li v-for="item in userInfo.messages">
                <p>{{item}}</p>
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
            }
        }
    }
</script>
<style scoped>
    .messages {
        position: absolute;
        left: 0;
        top: 0;
        background-color: #fff;
        width: 100vw;
        height: auto;
        min-height: 100vh;
        z-index: 101;
    }
    .messages .toolbar {
        position: fixed;
        width: 100%;
        height: auto;
        background-color: #fff;
        padding: 10px;
        border-bottom: 1px solid #777;
        z-index: 102;
    }
    .messages .toolbar .fa-angle-left {
        display: inline-block;
        text-align: center;
        width: 40px;
        color: #42b983;
    }
    .messages .toolbar h1 {
        position: absolute;
        margin: 8px 0;
        left: calc(50% - 100px);
        top: 0;
        width: 200px;
        font-size: 1.6em;
        text-align: center;
        color: #42b983;
    }
    .messages .messages-list {
        padding: 16px;
        padding-top: 3.4em;
        overflow-y: scroll;
    }
    .messages-list li {
        list-style-type: none;
        padding: 8px;
    }
    .messages-list li p {
        margin: 0;
    }
</style>
