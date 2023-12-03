import webpack from "webpack";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ 
            template: options.paths.html 
        })
    ]

    if(isDev) {
        plugins.push(new webpack.ProgressPlugin())
    }

    if(isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
        }))
    }

    return plugins;
}