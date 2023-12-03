import webpack from 'webpack';
import buildDevServer from './buildDevServer';
import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';
import buildPlugins from './buildPlugins';
import { BuildOptions } from './types/types';

export default function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;

    const isDev = options.mode === 'development';

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: 'bundle.[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined
    }
}