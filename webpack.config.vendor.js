const webpack = require('webpack');

const vendors = [
    'react',
    'react-dom',
    'classnames'
];

module.exports = {
    output:{
        filename:"./manifest/vendor.js",
        path: __dirname+'/dist/',
        library:"vendor"
    },
    entry: {
        vendor: vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest/manifest.json',
            name: 'vendor',
            context: __dirname
        })
    ]
};