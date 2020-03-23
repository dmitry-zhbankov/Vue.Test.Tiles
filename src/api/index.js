import * as realApi from "./api";
import * as mockApi from "./mock-api"

let api;

if (process.env.NODE_ENV !== 'production') {
    api = realApi;
} else {
    api = mockApi;
}

export default api;
