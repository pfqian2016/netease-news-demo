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
            <router-link to="/user/favorites" replace>Favorites</router-link>
            <router-link to="/user/favorites" replace>Messages</router-link>
        </ul>
        <router-view></router-view>
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
        padding-bottom: 4.4em;
        z-index: 1;
    }
    .user-center .header-bg {
      width: 100%;
      height: 14em;
      background-color: #42b983;
    }
    .user-center .user-header {
        position: relative;
        width: 100%;
    }
    .user-center img {
        display: block;
        position: absolute;
        top: calc(14em - 50px);
        left: calc(50% - 50px);
        margin: 0 auto;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .user-center .user-header .user-control,
    .user-center .user-header .username {
        margin: 60px auto 30px;
        text-align: center;
        font-size: 1em;
    }
    .user-control span {
        color: #42b983;
        text-decoration: none;
    }
    .user-center ul {
        padding-left: 0;
    }
    .user-center ul > a {
        display: block;
        padding: .4em 20px;
        font-size: 1.6em;
        list-style-type: none;
        text-decoration: none;
        color: #42b983;
        border-bottom: 1px solid #999;
    }
    .user-center ul > a:nth-child(1) {
        border-top: 1px solid #999;
    }
</style>
