import Vue from 'vue'
import Vuex from 'vuex'
import * as api from "../api"

Vue.use(Vuex)

const state = {
    tiles: undefined,
}

const mutations = {
    refreshTiles: function (state, tilesToRefresh) {
        state.tiles = tilesToRefresh;
    }
}

const actions = {
    getTiles: function (context) {
        // TODO add spinner
        // context.commit('loadStarted');
        api.fetchAllTiles().then(receivedTiles => context.commit('refreshTiles', receivedTiles));
    }
}

const getters = {
    tiles: state => state.tiles
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
