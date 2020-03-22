export default {
    fetchAllTiles: function () {
        return fetch("https://kb.itechart-group.com:8443/sites/department6/officedev/edu/_api/web/lists/GetByTitle('Useful%20Links')/items",
            {
                method:'GET',
                headers: {
                    'Accept': 'application/json'
                },
                credentials: 'same-origin'
            });
    }
}

