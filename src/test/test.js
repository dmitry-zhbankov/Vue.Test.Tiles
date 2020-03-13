let fetch= require("node-fetch");

let fetchAllTiles = function () {
    return fetch("http://wm-windows2012r/projects3/_api/web/lists/GetByTitle('Tiles%20Source')/items", {
        method: 'get',
        headers: {
            'Accept': 'application/json; odata=verbose',
        }

    });
};

let data;

let fillTilesData = function (json) {
    console.log(json);
};

let jsonTiles = function (response) {
    return response.json();
};
fetchAllTiles().then(resp => jsonTiles(resp)).then(json => fillTilesData(json))
