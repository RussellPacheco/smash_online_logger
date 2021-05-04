<template>
    <div>
    <NewAccount v-if="this.$store.state.createAccountToggle" />
    <div class="title-bar">
        <div class="create-account" @click="createAccount" >Create Account</div>
    </div>
    <div class="login-container">
        <div class="title">Smash Online Logger</div>
        <div :class="[this.$store.state.loginToggle ? this.visibleError : this.hiddenError]">{{this.$store.state.loginError}}</div>
        <form class="form">
            <input v-model="username" type="text" placeholder="Username"/>
            <input v-model="password" type="password" placeholder="Password"/>
            <button @click.prevent="onClick">Login</button>
        </form>
    </div> 
    </div> 
</template>

<script>
import NewAccount from "./NewAccount.vue"

export default {
    name: "Login",
    components: {
        NewAccount
    },

    data() {
        return {
            username: "",
            password: "",
            visibleError: "visibleerror",
            hiddenError: "hiddenerror",
        }
    },

    methods: {
        onClick() {
            this.$store.dispatch("verifyLogin", {username: this.username, password: this.password})
        },

        createAccount() {
            this.$store.commit("toggleCreateAccount")
        }
    }
}
</script>

<style scoped>

.create-account {
    float: right;
    margin-right: 1%;
    cursor: pointer;
}


.visibleerror {
    color:red;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
    margin-bottom: 1%;

}

.hiddenerror {
    visibility: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
    margin-bottom: 1%;

}

.login-container {
    display: flex;
    flex-direction: column;
}

.title {
    font-family: smashFont;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15%;
    font-size: 100px;
}

.form {
    display:flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}

input {
    margin-bottom: 3%;
}

button {
    margin-top: 10%;
}

</style>