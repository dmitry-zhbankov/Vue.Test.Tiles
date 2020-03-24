// vue.config.js
module.exports = {
    publicPath: '/projects3/SiteAssets/TestTiles/',
    filenameHashing: function () {
        if (process.env.NODE_ENV === 'production') {
        } else {
            return false;
        }
    }(),
};
