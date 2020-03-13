import Api from "@/api";

export default {
    getTiles: function (context) {
        // TODO add spinner
        // context.commit('loadStarted');
        Api.fetchAllTiles().then(receivedTiles => context.commit('refreshTiles', receivedTiles));
    }
}
