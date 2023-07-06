import * as glob from 'glob';
import * as path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import type * as webpack from 'webpack';
import { config as webpackCJSConfig } from './webpack.config.cjs';
import { config as webpackESMConfig } from './webpack.config.esm';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const getEntries = () => {
  const entity = {};
  const entryFiles = glob.sync('./src/**/*.{ts,tsx}');

  entryFiles.forEach(filepath => {
    let fileDir = /.\/src\/(.*?)\.(ts|tsx)$/i.exec(filepath);

    fileDir &&
      Object.assign(entity, {
        [fileDir[1]]: path.resolve(__dirname, filepath),
      });
  });

  return entity;
};

const webpackConfig =
  process.env.LIBRARY === 'module' ? webpackESMConfig : webpackCJSConfig;

const mode = process.env.MODE as webpack.Configuration['mode'];
const config: webpack.Configuration = {
  mode,
  entry: getEntries(),
  devtool: mode === 'development' ? 'source-map' : false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ include: /\.min\.js$/ })],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: process.env.TS_NODE_PROJECT,
            },
          },
        ],
        include: path.resolve(__dirname, './src/'),
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  ...webpackConfig,
};

export default config;
