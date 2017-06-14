<template>
    <div class="header">
        <h1>Netease News</h1>
        <button type="button" name="button" @click="refresh"><span class="fa fa-refresh fa-4x"></span></button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'refresh'
        }
    },
    methods: {
        refresh() {
            //TODO refresh the news
            console.log(this.msg);
        }
    }
}
</script>
<style scoped>
.header {
    position: fixed;
    margin: 0;
    width: 100%;
    height: 8em;
    background-color: #42b983;
    text-align: center;
    vertical-align: middle;
    z-index: 1;
}
.header h1 {
    display: inline-block;
    font-size: 3em;
    color: #f9f9f9;
}
.header button {
    display: inline-block;
    position: absolute;
    right: 2rem;
    height: inherit;
    color: #f9f9f9;
    background-color: transparent;
    text-align: right;
    outline: none;
    border: none;
}
</style>
