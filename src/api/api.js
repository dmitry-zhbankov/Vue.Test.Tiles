import constants from "@/utils/constants";

function fetchAllTiles() {
    return fetch(`${window.location.origin}${constants.apiListPath}`,
        {
            method: 'GET',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
            }
        });
}

function fetchTileById(id) {
    return fetch(`${window.location.origin}${constants.apiListPath}${id}`,
        {
            method: 'GET',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
            }
        });
}

export function createTileInfo(tileObj) {
    let tile = {
        id: tileObj.Id,
        type: tileObj.TileType,
        title: tileObj.Title,
        description: tileObj.Tile_x0020_Description,
        tileUrl: tileObj.TileURL.Url,
        tilePictureUrl: tileObj.TilePictureURL.Url,
        positionX: tileObj.Tile_x0020_Position_x0020_X,
        positionY: tileObj.Tile_x0020_Position_x0020_Y,
        tileWidth: tileObj.Tile_x0020_Width,
        tileHeight: tileObj.Tile_x0020_Height
    };
    return tile;
}

export function createTilesInfo(json) {
    let tiles = [];
    for (let item of json.value) {
        let tile = createTileInfo(item);
        tiles.push(tile);
    }
    return tiles;
}

export function getAllTiles() {
    return fetchAllTiles().then(response => response.json()).then(json => createTilesInfo(json))
}

export function getTileById(id) {
    return fetchTileById(id).then(response => response.json()).then(json => createTileInfo(json))
}
