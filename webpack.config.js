const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      assetModuleFilename: 'assets/images/[name][hash][ext][query]',
    },
    devtool: "eval-source-map",
    devServer: {
      watchFiles: ["./src/template.html"],
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./src/template.html",
        }),
    ],
    module : {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test : /\.css$/i,
                use : ["style-loader" , "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|avif)$/i,
                type: 'asset/resource', 
            }
        ],
    },
};