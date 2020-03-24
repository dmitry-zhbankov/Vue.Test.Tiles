function fetchAllTiles() {

    return fetch(`${window.location.origin}/projects3/_api/web/lists/GetByTitle('Tiles%20Source')/items`,
        {
            method: 'GET',
            // credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': 'https://wm-windows2012r',
                // 'Access-Control-Allow-Credentials': true,
            }
        });
}

export function createTilesInfo(json) {
    let tiles = [];
    for (let item of json.value) {
        let tile = {
            id: item.Id,
            type: item.TileType,
            title: item.Title,
            description: item.Tile_x0020_Description,
            tileUrl: item.TileURL.Url,
            tilePictureUrl: item.TilePictureURL.Url,
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
    return fetchAllTiles().then(response=>response.json()).then(json => createTilesInfo(json))
}