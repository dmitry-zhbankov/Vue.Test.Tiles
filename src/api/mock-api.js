/* eslint-disable no-unused-vars */
import response from "./mock-response"
import {createTilesInfo, createTileInfo} from "./api"

const LATENCY = 300;

function mockResponse() {
    return JSON.parse(JSON.stringify(response));
}

function fetchAllTiles() {
    return new Promise(resolve => setTimeout(() => {
        resolve(mockResponse())
    }, LATENCY))
}

function fetchTileById(id, response) {
    return new Promise(resolve => setTimeout(() => {
        let tileObj = response.value.find(x => x.Id === id);
        resolve(tileObj)
    }, LATENCY))
}

export function getAllTiles() {
    return fetchAllTiles().then(json => createTilesInfo(json))
}

export function getTileById(id) {
    return fetchTileById(id, response).then(json => createTileInfo(json));
}

export function updateTile(tile) {
    return fetchTileById(tile.id, response).then(json => {
        json.Title = tile.title;
        json.Tile_x0020_Description = tile.description;
        json.TileURL.Url = tile.tileUrl;
        json.TilePictureURL.Url = tile.tilePictureUrl;
        json.Tile_x0020_Position_x0020_X = tile.left;
        json.Tile_x0020_Position_x0020_Y = tile.top;
        json.Tile_x0020_Width = tile.width;
        return json;
    }).then(json => createTileInfo(json))
}
