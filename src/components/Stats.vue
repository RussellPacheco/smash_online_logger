<template>
    <div>
    <div class="title-bar">
        <div class="title">Smash Online Logger</div>
        <div class="opponent-tag">Current Opponent: <span class="opponent-name">{{this.$store.state.opponent}}</span></div>
    </div>
    <div class="stats-container">
        <div class="left-col">
            <div class="left-col-title">Last Time Played: <span class="left-col-stats">{{this.$store.state.latestMatch}}</span></div>
            <div class="left-col-title">Total times played against: <span class="left-col-stats">{{this.$store.state.totalMatches}}</span></div>
            <div class="left-col-title">Amount of times D/Ced: <span class="left-col-stats">{{this.$store.state.dc}}</span></div>
            <div class="left-col-title">Won Against: <span class="left-col-stats">{{this.$store.state.wins}}</span></div>
            <div class="left-col-title">Lost Against: <span class="left-col-stats">{{this.$store.state.loss}}</span></div>
        </div>
        <div class="right-col">
            <form>
                <div class="form-option">
                    <div class="form-title">Currently played?</div>
                    <label for="currently-played yes">Yes
                        <input id="currently-played yes" v-model="currentlyPlayedYes" type="checkbox" />
                    </label>                        
                    <label for="currently-played no">No
                        <input id="currently-played no" v-model="currentlyPlayedNo" @change="toggleTimeConfirm" type="checkbox" />
                    </label>
                </div>
                <TimeConfirmModal :class="[this.timeConfirmShow ? timeVisible : timeHidden ]" />
                <div class="form-option">
                    <div class="form-title">Opponent D/Ced?</div>
                    <label for="opponent-dced yes">Yes
                        <input id="opponent-dced yes" v-model="opponentDcedYes" type="checkbox" />
                    </label>
                    <label for="opponent-dced no">No
                        <input id="opponent-dced no" v-model="opponentDcedNo" type="checkbox" />
                    </label>
                </div>
                <div class="form-option">
                    <div class="form-title">Did you win?</div>
                    <label for="win yes">Yes
                        <input id="win yes" v-model="winYes" type="checkbox" />
                    </label>
                    <label for="win no">No
                        <input id="win no" v-model="winNo" type="checkbox" />
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
            timeConfirmShow: false,
            currentlyPlayedYes: false,
            currentlyPlayedNo: false,
            opponentDcedYes: false,
            opponentDcedNo: false,
            winYes: false,
            winNo: false,
            timeVisible: "time-visible",
            timeHidden: "time-hidden"
        }
    },

    components: {
        TimeConfirmModal,
    },

    methods: {
        onClick() {
            if (this.checkboxValidator()) {
                let data = {
                    winner: this.$store.state.player
                }

                if (this.opponentDcedYes && !this.opponentDcedNo) {
                    data.dc = this.$store.state.opponent
                }

                if(!this.winYes && this.winNo) {
                    data.winner = this.$store.state.opponent
                }
                this.$store.dispatch("createMatch", data)
                this.$store.commit("setStatsToggle")

            } else {
                alert("Please make sure either Yes or No is checked!")
            }
        },

        checkboxValidator() {
            if (!this.currentlyPlayedYes && !this.currentlyPlayedNo || !this.opponentDcedYes && !this.opponentDcedNo || !this.winYes && !this.winNo) {
                return false
            } else if (this.currentlyPlayedYes && this.currentlyPlayedNo || this.opponentDcedYes && this.opponentDcedNo || this.winYes && this.winNo) {
                return false
            }         
            return true

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

.opponent-name {
    font-weight: bold;
}

.left-col-stats {
    font-family: fantasy;
    font-size: 25px;
    font-weight: bolder;
    position: absolute;
    margin-left: 1%;
    margin-top: 0.4%;
}

.left-col-title, .form-title {
    font-size: 30px;
    font-weight: bold;
    margin-right: auto;
    margin-top:auto;
    margin-bottom:auto;
}

.time-hidden {
    visibility: hidden;
}

.stats-container {
    display: flex;
    margin-top: 7%;
}

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

.opponent-tag {
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 1%;
    font-size: 20px;
}

.left-col, form {
    border-radius: 10px;

}


.left-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2%;
    margin-left: auto;
    border-style: solid;
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


label {
    font-weight: bold;
}
</style>