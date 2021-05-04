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
        matchTime: "",
        loginError: "",
        loginToggle: false,
        createAccountToggle: false,
        createUserError: "",
        createUserErrorToggle: false
    },

    mutations: {
        setCreateAccountToggle(state) {
            if (state.createAccountToggle) {
                state.createAccountToggle = false
            } else {
                state.createAccountToggle = true
            }
        },

        setLoginToggle(state) {
            state.loginShow = false
            state.getOpponentShow = true
            state.loginToggle = false
            state.loginError = ""
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
            } else {
                state.latestMatch = "Never Played Before"
            }
            state.totalMatches = payload.totalMatches
            state.dc = payload.dc
            state.wins = payload.wins
            state.loss = payload.loss
        }, 

        setLoginError(state, payload) {
            state.loginError = payload
            state.loginToggle = true
        },

        setUserErrorToggle(state, payload) {
            state.createUserError = payload
            state.createUserErrorToggle = true
        }
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
            } catch (err) {
                console.error(err)
            }

            state.matchTime = ""
        },

        async verifyLogin({ commit }, payload) {
            try {
                const res = await axios.post("/user/login", payload)
                if (res.data === "Username and Password does not match" || res.data === "User doesn't exist") {
                    commit("setLoginError", res.data)                    
                } else {
                    commit("setPlayer", res.data)
                    commit("setLoginToggle")
                }
            } catch (err) {
                console.error(err)
            }
        },

        async createUser({ commit }, payload) {
            try {
                const res = await axios.post("/user", payload)
                if (res.data !== "Completed") {
                    commit("setUserErrorToggle", res.data)
                } else {
                    commit("setCreateAccountToggle")
                }
            } catch (err) {
                console.error(err)
            }
        }
    }
});