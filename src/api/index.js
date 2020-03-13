import realApi from "./api";
import mockApi from "./mock-api"

let api;

if (process.env.NODE_ENV === 'production') {
    api = realApi;
} else {
    api = mockApi;
}

export default api;
