import Api from "./../api/index";

export default {
    getTiles: function (context) {
        // TODO add spinner
        // context.commit('loadStarted');
        Api.getAllTiles().then(receivedTiles => context.commit('refreshTiles', receivedTiles));
    }
}
