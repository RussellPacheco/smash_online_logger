<template>
    <div class="login-container">
        <div class="title">Smash Online Logger</div>
        <form class="form">
            <div></div>
            <input placeholder="Username"/>
            <input placeholder="Password"/>
            <button @click="onClick">Login</button>
        </form>
    </div>  
</template>

<script>
export default {
    name: "Login",
    methods: {
        onClick() {
            this.$store.commit("setLoginToggle")
        }

    }
}
</script>

<style scoped>

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
    margin-top: 2%;
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