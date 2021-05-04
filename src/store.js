import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loginShow: true,
        getOpponentShow: false,
        statsShow: false,
        player: "",
        opponent: "",
        latestMatch: "Never Played Before",
        totalMatches: 0,
        dc: 0,
        wins: 0,
        loss: 0,
        matchTime: ""
    },

    mutations: {
        setLoginToggle(state) {
            state.loginShow = false
            state.getOpponentShow = true
        },

        setOpponentToggle(state) {
            state.getOpponentShow = false;
            state.statsShow = true;
        },

        setOpponent(state, payload) {
            state.opponent = payload
        },        
        
        setPlayer(state, payload) {
            state.player = payload
        },

        setMatchTime(state, payload) {
            state.matchTime = payload
        },

        resetMatchTime(state) {
            state.matchTime = ""
        },

        setStatsToggle(state) {
            state.getOpponentShow = true;
            state.statsShow = false;
        },

        setStats(state, payload) {
            if (payload.latestMatch !== "Never Played Before") {
                const date = new Date(payload.latestMatch)
                state.latestMatch = `${date.toLocaleDateString()} @ ${date.toLocaleTimeString()}`
            } 
            state.totalMatches = payload.totalMatches
            state.dc = payload.dc
            state.wins = payload.wins
            state.loss = payload.loss
        }, 
    },

    actions: {
        async getMatches({ commit, state }) {
            try {
                const { data } = await axios.get(`/match/${state.player}/${state.opponent}`)
                commit("setStats", data)

            } catch (err) {
                console.error(err)
            }
        },
        
        async createMatch({ state }, payload) {
            let data = {
                player: state.player,
                opponent: state.opponent,
                winner: payload.winner
            }

            if (payload.dc) {
                data.disconnected = payload.dc
            }

            if (state.matchTime) {
                data.timestamp = state.matchTime
            }

            try {
                const res = await axios.post("/match", data)
                console.log(res)
            } catch (err) {
                console.error(err)
            }

            state.matchTime = ""


        }
    }
});