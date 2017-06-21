<template>
    <div class="tabs">
        <div class="tabs-inner">
            <router-link to="/news/military" replace>Military</router-link>
            <router-link to="/news/sports" replace>Sports</router-link>
            <router-link to="/news/technique" replace>Technique</router-link>
            <router-link to="/news/education" replace>Education</router-link>
            <router-link to="/news/entertainment" replace>Entertainment</router-link>
            <router-link to="/news/finiance" replace>Finiance</router-link>
            <router-link to="/news/stock" replace>Stock</router-link>
            <router-link to="/news/travel" replace>Travel</router-link>
            <router-link to="/news/female" replace>Lady</router-link>
        </div>
    </div>
</template>
<style scoped>
    .tabs {
        width: 100%;
        height: 30px;
        overflow-x: scroll;
    }
    .tabs::-webkit-scrollbar {
        display: none;
    }
    .tabs .tabs-inner {
        width: 1080px;
        height: 30px;
    }
    .tabs a {
        display: block;
        float: left;
        width: 120px;
        height: 30px;
        line-height: 30px;
        font-size: 1em;
        text-align: center;
        text-decoration: none;
        background-color: #fff;
        color: #999;
    }
    .tabs .router-link-active {
        font-size: 1.2em;
        color: #42b983;
    }
</style>
