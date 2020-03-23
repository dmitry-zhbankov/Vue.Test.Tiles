function fetchAllTiles() {
    return fetch("https://wm-windows2012r/projects3/_api/web/lists/GetByTitle('Tiles%20Source')/items",
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
}

export function createTilesInfo(response) {
    let tiles = [];
    for (let item of response.value) {
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
    return tiles;
}

export function getAllTiles() {
    return fetchAllTiles().then(response => createTilesInfo(response))
}