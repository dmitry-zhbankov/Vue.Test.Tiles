/* eslint-disable no-unused-vars */
import response from "./mock-response"
import {createTilesInfo,createTileInfo} from "./api"

const LATENCY = 300;

function mockResponse() {
    return JSON.parse(JSON.stringify(response));
}

function fetchAllTiles() {
    return new Promise(resolve => setTimeout(() => {
        resolve(mockResponse())
    }, LATENCY))
}

function fetchTileById(id) {
    return new Promise(resolve => setTimeout(() => {
        let tileObj =mockResponse().value.find(x=>x.Id===id);
        tileObj.Title="Refreshed tile";
        resolve(tileObj)
    }, LATENCY))
}

export function getAllTiles() {
    return fetchAllTiles().then(json => createTilesInfo(json))
}

export function getTileById(id) {
    return fetchTileById(id).then(json => createTileInfo(json))
}
