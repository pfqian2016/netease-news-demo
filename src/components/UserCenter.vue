<template>
    <div class="user-center">
        <div class="user-header">
          <p class="header-bg"></p>
          <img src="../assets/user_icon.jpg" alt="icon">
          <p class="username" @click="logout" v-if="isUserValid" v-text="userInfo.username"></p>
          <div class="user-control" v-else>
              <span @click="showLoginModal">Login</span>
               &nbsp;&nbsp;|&nbsp;&nbsp;
              <span @click="showSignupModal">Signup</span>
          </div>
        </div>
        <ul>
            <li>Favorites</li>
            <li>Messages</li>
        </ul>
        <Modal v-if="showModal"></Modal>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    import Modal from './Modal.vue'

    export default {
        methods: mapActions([
            'showLoginModal',
            'showSignupModal',
            'logout'
        ]),
        computed: mapState([
            'isUserValid',
            'showModal',
            'userInfo'
        ]),
        mounted() {
            this.$store.state.showHeader = false;
        },
        components: {
            Modal
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
    .user-center .header-bg {
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
    .user-center .user-header .user-control,
    .user-center .user-header .username {
        margin: 120px auto 30px;
        text-align: center;
        font-size: 2.4em;
    }
    .user-control span {
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
