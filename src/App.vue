<template>
  <div>
    <Login v-if="this.$store.state.loginShow && !this.$store.state.createAccountToggle" />
    <NewAccount v-if="this.$store.state.createAccountToggle" />
    <GetOpponent v-if="this.$store.state.getOpponentShow" />
    <Stats v-if="this.$store.state.statsShow" />
  </div>
</template>

<script>
import GetOpponent from './components/getOpponent.vue'
import Login from './components/Login.vue'
import Stats from './components/Stats.vue'
import NewAccount from "./components/NewAccount.vue"

export default {
  name: 'App',
  components: {
    Login,
    GetOpponent,
    Stats,
    NewAccount
  }
}
</script>

<style>
@font-face {
  font-family: smashFont;
  src: url("./assets/font/smash_font.ttf")
}


#app {
  font-family: smashFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
