<template>
    <div class="nav">
        <router-link to="/news" replace><span class="fa fa-newspaper-o"></span> News</router-link>
        <router-link to="/user" replace><span class="fa fa-user-o"></span> User</router-link>
    </div>
</template>
<style scoped>
.nav {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px solid #333;
    z-index: 100;
}
.nav a {
    display: inline-block;
    padding: 1em 0;
    width: 50%;
    color: #999;
    background-color: #fff;
    font-size: 2.6em;
    text-align: center;
    text-decoration: none;
}
/*a + a {
    border-left: 1px solid #333;
}*/
.nav .router-link-active {
    color: #42b983;
}
</style>
