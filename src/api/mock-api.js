/* eslint-disable no-unused-vars */
import response from "./mock-response"
import {createTilesInfo} from "./api"

const LATENCY = 50;

function fetchAllTiles() {
    return new Promise(resolve => setTimeout(() => {
        resolve(response)
    }, LATENCY))
}

export function getAllTiles() {
    return fetchAllTiles().then(response => createTilesInfo(response))
}
