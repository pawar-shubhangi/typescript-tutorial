var path = require("path");
// var fs = require("fs");

module.exports = {
    entry: {
        index: "./src/scripts/index.ts"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public/scripts")
    },
    module: {
        rules: [{
            test: /\.(t|j)s$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-typescript"],
                    plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-arrow-functions", "@babel/plugin-transform-classes"]
                }
            },
            exclude: /node_modules/
        }]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"]
    },
    mode: "development"
};