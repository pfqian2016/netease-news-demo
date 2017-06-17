<template>
    <div class="modal">
        <div class="modal-mask"></div>
        <div class="modal-dialog">
            <h2 class="dialog-title">Login<span class="modal-close" @click="closeModal">&nbsp;&times;&nbsp;</span></h2>
            <hr>
            <div class="dialog-body">
                <div class="input-group">
                    <label for="username">Username:</label>
                    <input type="text" name="username" placeholder="email/phone">
                </div>
                <div class="input-group">
                    <label for="passwd">Password:</label>
                    <input type="password" name="passwd" placeholder="password">
                </div>
                <div class="input-group">
                    <button type="submit" name="button">Login/Sign up</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        methods: {
            closeModal() {
                this.$store.state.showModal = false;
            }
        }
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
