// vue.config.js
module.exports = {
    publicPath: '/projects3/SiteAssets/TestTiles/',
    filenameHashing: function () {
        if (process.env.NODE_ENV === 'production') {
           return false;
        }
    }(),
};

// configureWebpack: config => {
//     // config.output.filename = '[name].js';
//     // config.output.chunkFilename = '[name].js';
// },
// css: {
//     extract: {
//         filename: '[name].css',
//     },
// },
