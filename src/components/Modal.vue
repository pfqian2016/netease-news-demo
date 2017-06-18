<template>
    <div class="modal">
        <div class="modal-mask"></div>
        <div class="modal-dialog">
            <h2 class="dialog-title">{{isLoginOrSignup}}<span class="modal-close" @click="closeModal">&nbsp;&times;&nbsp;</span></h2>
            <hr>
            <div class="dialog-body">
                <div class="input-group">
                    <label for="username">Username:</label>
                    <input id="username" type="text" name="username" placeholder="email/phone" v-model="username">
                </div>
                <div class="input-group">
                    <label for="password">Password:</label>
                    <input id="password" type="password" name="password" placeholder="password" v-model="password">
                </div>
                <div class="input-group">
                    <button type="submit" name="button" @click="confirm">Login/Sign up</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            validate(name, pwd) {
                if(!name.length) {
                    console.log('username cannot be empty');
                    return false;
                }
                if(!pwd.length) {
                    console.log('password cannot be empty');
                    return false;
                }
                return true;
            },
            confirm() {
                let _self = this;
                if(this.validate(_self.username, _self.password)){
                    switch(this.$store.state.isLoginOrSignup) {
                        case 'Login':
                        this.$store.dispatch('login',{username:_self.username,password:_self.password});
                        break;
                        case 'Sign up':
                        this.$store.dispatch('signup',{username:_self.username,password:_self.password});
                        break;
                    }
                }
            },
            closeModal() {
                this.$store.state.showModal = false;
            }
        },
        computed: mapState([
            'isLoginOrSignup'
        ])
    }
</script>
<style scoped>
    .modal {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
    }
    .modal .modal-mask {
        width: inherit;
        height: inherit;
        background-color: #555;
        opacity: .5;
    }
    .modal .modal-dialog {
        position: absolute;
        left: calc(15vw - 20px);
        top: 25vh;
        margin: 0 auto;
        padding: 20px;
        width: 70vw;
        height: 30vh;
        background-color: #fff;
        border-radius: 20px;
    }
    .modal .modal-dialog .dialog-title {
        margin-top: 0;
        position: relative;
        color: #42b983;
        font-size: 2em;
    }
    .modal .modal-dialog .dialog-title .modal-close {
        position: absolute;
        right: 0;
    }
    .modal .modal-dialog .dialog-body {
        margin-top: 10em;
    }
    .modal .modal-dialog .dialog-body .input-group {
        font-size: 2.2em;
        margin: 1em 0;
        color: #555;
    }
    .modal .modal-dialog .dialog-body .input-group input {
        display: inline-block;
        font-size: .8em;
        height: 2.6em;
    }
    .modal .modal-dialog .dialog-body .input-group button {
        position: absolute;
        right: 2em;
        padding: 10px;
        border: 1px solid #42b983;
        border-radius: 5px;
        background-color: transparent;
        font-size: .8em;
        color: #42b983;
    }
</style>
