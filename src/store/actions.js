import Api from "@/api";

export default {
    getTiles: function (context) {
        // TODO add spinner
        // context.commit('loadStarted');
        Api.getAllTiles().then(receivedTiles => context.commit('refreshTiles', receivedTiles));
    },
    getTileById: function (context, id) {
        Api.getTileById(id).then(receivedTile => context.commit('refreshTile', receivedTile));
    },
    updateTile: function (context, tile) {
        Api.updateTile(tile).then(result => {
            if (result) {
                context.dispatch('getTileById', tile.id);
            }
        })
    },
}
