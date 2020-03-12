import data from "./mock-data"

const LATENCY = 50

export function fetchAllTiles() {
    return new Promise(resolve => setTimeout(() => {
        resolve(data)
    }, LATENCY))
}
