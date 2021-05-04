<template>
    <div>
        <div class="title-bar">
            <div class="title">Smash Online Logger</div>
    </div>
        <input type="button" @click.prevent="onClick" value="Submit"/>
    </div>
</template>

<script>
export default {
    name: "NewAccount",
    methods: {
        onClick() {
            this.$store.commit("toggleCreateAccount")
        }
    }
}
</script>

<style scoped>

.title-bar {
    border-style: none none solid;
    display: flex;
    justify-content: space-between;
    width: 99.75vw;
    margin-left: -0.25%
}

.title {
    font-family: smashFont;
    font-size: 50px;
    margin-left: 1%;
    margin-top: 0.5%;
    margin-bottom: 0.5%;
}



</style>