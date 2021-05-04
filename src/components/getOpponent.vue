<template>
    <div class="getopponent-container">
        <div class="title">Who are you playing now?</div>
        <form class="form">
            <input v-model="opponent" placeholder="Opponent's Tag" />
            <button class="button" @click="onClick">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "GetOpponent",
    data() {
        return {
            opponent: ""
        }
    },
    methods: {
        onClick() {
            this.$store.commit("setOpponent", this.opponent)
            this.$store.commit("setOpponentToggle")
            this.$store.dispatch("getMatches")
        }
    }

}
</script>

<style scoped>

.getopponent-container {
    display: flex;
    flex-direction: column;
}

.title {
    margin-left: auto;
    margin-right: auto;
    margin-top: 15%;
    font-size: 50px;
}

.form {
    display:flex;
    flex-direction: column;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
}

.button {
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    
}

</style>