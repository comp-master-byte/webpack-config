import webpack, { DefinePlugin } from "webpack";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default function buildPlugins({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.html}),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
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

    if(analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins;
}