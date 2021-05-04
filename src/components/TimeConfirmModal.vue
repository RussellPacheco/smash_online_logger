<template>
    <div class="time-confirm-modal-container">
        <div class="time-confirm-title">When did you play?</div>
        <form>
            <input type="date" v-model="date" @change="setMatchTime" name="date" id="dateinput" />
            <input type="time" v-model="time" @change="setMatchTime" name="time" id="timeinput" />
        </form>
    </div>  
</template>

<script>
export default {
    name:"TimeConfirmModal",
    data() {
        return {
            time: "",
            date: ""
        }
    },

    methods: {
        setMatchTime() {
            this.$store.commit("setMatchTime", `${this.date} ${this.time}`)
        }
    }

}
</script>

<style>

.time-confirm-modal-container {
    display: flex;
    flex-direction: column;
    height: 25vh;
}

.time-confirm-title {
    margin-bottom: 5%;
}

.time-input {
    width:5%;
}

</style>