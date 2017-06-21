<template>
    <div class="header">
        <h1>Netease News / {{type}}</h1>
        <button type="button" name="button" @click="refresh"><span class="fa fa-refresh fa-2x"></span></button>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    methods: mapActions([
        'refresh'
    ]),
    computed: mapGetters([
        'type'
    ])
}
</script>
<style scoped>
.header {
    position: fixed;
    margin: 0;
    width: 100%;
    height: 3.8em;
    background-color: #42b983;
    text-align: center;
    vertical-align: middle;
    z-index: 1;
}
.header h1 {
    display: inline-block;
    font-size: 1.4em;
    color: #f9f9f9;
}
.header button {
    display: inline-block;
    position: absolute;
    right: .4rem;
    height: inherit;
    color: #f9f9f9;
    background-color: transparent;
    text-align: center;
    outline: none;
    border: none;
}
</style>
