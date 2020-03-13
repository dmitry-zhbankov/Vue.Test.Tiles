import data from "@/api/mock-data";

const LATENCY = 50;

export default {
    fetchAllTiles: function () {
        return new Promise(resolve => setTimeout(() => {
            resolve(data)
        }, LATENCY))
    }
}