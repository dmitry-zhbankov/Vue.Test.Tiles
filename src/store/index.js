import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

const state = {
    tiles: undefined,
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
