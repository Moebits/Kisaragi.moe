const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const nodeExternals = require("webpack-node-externals")
const webpack = require("webpack")
const path = require("path")
const exclude = [/node_modules/, /dist/]

module.exports = (env, argv) => {
    if (env.platform === "web") exclude.push(/server.tsx/)
    const base = {
        target: "web",
        entry: "./index",
        mode: "production",
        node: {__dirname: false},
        output: {filename: "script.js", chunkFilename: "script.js", path: path.resolve(__dirname, "./dist")},
        resolve: {extensions: [".js", ".jsx", ".ts", ".tsx"], alias: {"react-dom$": "react-dom/profiling", "scheduler/tracing": "scheduler/tracing-profiling"}},
        performance: {hints: false},
        optimization: {minimize: false, minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()], namedModules: true},
        module: {
            rules: [
                {test: /\.(jpe?g|png|gif|svg|mp3|wav|mp4)$/, exclude, use: [{loader: "file-loader", options: {name: "[path][name].[ext]"}}]},
                {test: /\.txt$/, exclude, use: ["raw-loader"]},
                {test: /\.html$/, exclude, use: [{loader: "html-loader", query: {minimize: false}}]},
                {test: /\.css$/, exclude, use: [{loader: MiniCssExtractPlugin.loader, options: {hmr: env.platform === "web"}}, "css-loader"]},
                {test: /\.less$/, exclude, use: [{loader: MiniCssExtractPlugin.loader, options: {hmr: env.platform === "web"}}, "css-loader", {loader: "less-loader"}]},
                {test: /\.(tsx?|jsx?)$/, exclude, use: [{loader: "ts-loader", options: {transpileOnly: true}}]}
            ]
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.HashedModuleIdsPlugin(),
            new MiniCssExtractPlugin({
                filename: "styles.css",
                chunkFilename: "styles.css"
            })
        ]
    }

    if (env.platform === "web") {
        const plugins = [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "./index.html"),
                minify: false
            })
        ]
        base.plugins = [...base.plugins, ...plugins]
    }

    if (env.platform === "server") {
        base.target = "node"
        base.entry = "./server"
        base.output.filename = "server.js"
        base.externals = [nodeExternals()]
    }

    return base
}