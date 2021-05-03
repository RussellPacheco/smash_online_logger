<template>
    <div class="stats-container">
        <div class="title-bar">
            <div class="title">Smash Online Logger</div>
            <div class="opponent-tag">Current Opponent: Tag</div>
        </div>
        <div class="lower-row">
            <div class="left-col">
                <div>Last Time Played:</div>
                <div>Total times played against:</div>
                <div>Amount of times D/Ced:</div>
                <div>Won Against:</div>
                <div>Lost Against:</div>
            </div>
            <div class="right-col">
                <TimeConfirmModal v-if="this.timeConfirmShow" />
                <form>
                    <div class="form-option">
                        <div class="form-title">Currently played:</div>
                        <label for="currently-played yes">Yes
                            <input id="currently-played yes" type="checkbox" />
                        </label>                        
                        <label for="currently-played no">No
                            <input id="currently-played no" @change="toggleTimeConfirm" type="checkbox" />
                        </label>
                    </div>
                    <div class="form-option">
                        <div class="form-title">Opponent D/Ced:</div>
                        <label for="opponent-dced yes">Yes
                            <input id="opponent-dced yes" type="checkbox" />
                        </label>
                        <label for="opponent-dced no">No
                            <input id="opponent-dced no" type="checkbox" />
                        </label>
                    </div>
                    <div class="submit">
                        <input type="button" @click="onClick" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    </div>  
</template>

<script>
import TimeConfirmModal from "./TimeConfirmModal.vue"


export default {
    name: "Stats",

    data() {
        return {
            timeConfirmShow: false
        }
    },

    components: {
        TimeConfirmModal,
    },

    methods: {
        onClick() {
            this.$store.commit("setStatsToggle")
        },

        toggleTimeConfirm() {
            if (this.timeConfirmShow) {
                this.timeConfirmShow = false
            } else {
                this.timeConfirmShow = true
            }
        }
    }

}
</script>

<style scoped>

.stats-container {
    display: flex;
    flex-direction: column;
}

.title-bar {
    border-style: solid;
    display: flex;
    justify-content: space-between;
}

.title {
    font-family: smashFont;
    font-size: 50px;
    margin-left: 1%;
    margin-top: 0.5%;
    margin-bottom: 0.5%;
}

.opponent-tag {
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 1%;
    font-size: 20px;
}

.lower-row {
    display: flex;
    justify-content: space-around;
}

.left-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2%;
    margin-left: auto;
    border-style: solid;
    height: 80vh;
    width: 30vw;
}

.right-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
    width: 30vw;
}

form {
    display: flex;
    flex-direction: column;
    border-style: solid;
    height: 50vh;
    padding-top: 5%;
}

.form-option {
    display: flex;
    margin-bottom: 3%;
}

.form-title {
    margin-right: 10%;
    margin-bottom: 20%;
}

.submit {
    margin: auto;
}

</style>