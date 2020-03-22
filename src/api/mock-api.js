/* eslint-disable no-unused-vars */
import mockResponse from "./mock-response"

const LATENCY = 50;

export default {
    fetchAllTiles: function () {
        let tiles = [];
        for (let item of mockResponse.value) {
            let tile = {
                id: item.Id,
                type: item.Type,
                title: item.Title,
                tileUrl: item.TileURL,
                tilePictureUrl: item.TilePictureURL,
                positionX: item.Tile_x0020_Position_x0020_X,
                positionY: item.Tile_x0020_Position_x0020_Y,
                tileWidth: item.Tile_x0020_Width,
                tileHeight: item.Tile_x0020_Height
            };
            tiles.push(tile);
        }
        return new Promise(resolve => setTimeout(() => {
            resolve(tiles)
        }, LATENCY))
    }
}
