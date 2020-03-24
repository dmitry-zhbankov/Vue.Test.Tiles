export default {
    refreshTiles: function (state, tilesToRefresh) {
        state.tiles = tilesToRefresh;
    },
    refreshTile: function (state, tileToRefresh) {
        let index = state.tiles.findIndex(x => x.id === tileToRefresh.id);
        if (index >= 0) {
            state.tiles.splice(index,1,tileToRefresh);
        }
    },
}
