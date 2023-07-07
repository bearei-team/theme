import * as path from 'path';
import type * as webpack from 'webpack';

export const config: webpack.Configuration = {
  output: {
    path: path.resolve(__dirname, './lib/commonjs'),
    filename: '[name].js',
    publicPath: './lib/commonjs',
    library: { type: 'commonjs' },
  },
  externalsType: 'commonjs',
  externals: {},
};
