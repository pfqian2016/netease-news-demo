<template>
    <div class="load-more">
        <button type="button" name="button" @click="loadMore"><img src="../assets/loading.gif" v-show="isLoading">Load more...</button>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {
    methods: mapActions([
        'loadMore'
    ]),
    computed: mapState([
        'isLoading'
    ])
}
</script>
<style>
    .load-more button {
        display: block;
        width: 100%;
        padding: 1em 0;
        border: none;
        outline: none;
        border-top: 1px solid #ddd;
        color: #aaa;
        background-color: #fff;
        font-size: 1.2em;
        text-align: center;
    }
    .load-more button img {
        display: inline-block;
        width: 2.8em;
        vertical-align: middle;
    }
</style>
