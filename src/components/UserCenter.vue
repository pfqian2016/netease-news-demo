<template>
    <div class="user-center">
        <div class="user-header">
          <p></p>
          <img src="../assets/user_icon.jpg" alt="icon">
          <div class="user-control">
              <a href="#">Login</a>
               &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="#">Signup</a>
          </div>
        </div>
        <ul>
            <li>Favorites</li>
            <li>Messages</li>
        </ul>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.$store.state.showHeader = false;
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
    }
    .user-center {
        padding-bottom: 8em;
        z-index: 1;
    }
    .user-center p {
      width: 100%;
      height: 30em;
      background-color: #42b983;
    }
    .user-center .user-header {
        position: relative;
        width: 100%;
    }
    .user-center img {
        display: block;
        position: absolute;
        top: calc(30em - 100px);
        left: calc(50% - 100px);
        margin: 0 auto;
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
    .user-center .user-header .user-control {
        margin: 120px auto 30px;
        text-align: center;
        font-size: 2.4em;
    }
    .user-control a {
        color: #42b983;
        text-decoration: none;
    }
    .user-center ul {
        padding-left: 0;
    }
    .user-center ul > li {
        padding: .5em 30px;
        font-size: 3.4em;
        list-style-type: none;
        color: #42b983;
        border-bottom: 1px solid #999;
    }
    .user-center ul > li:nth-child(1) {
        border-top: 1px solid #999;
    }
</style>
