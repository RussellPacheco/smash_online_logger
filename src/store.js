import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loginShow: true,
        getOpponentShow: false,
        statsShow: false,
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

        setStatsToggle(state) {
            state.getOpponentShow = true;
            state.statsShow = false;
        }

    },

    actions: {

    }
});