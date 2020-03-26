export default {
    tiles: state => state.tiles,
    getTile: (state) => (id) => {
        return state.tiles.find(tile => tile.id == id)
    }
}