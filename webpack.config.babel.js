import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  inject: true,
  template: path.resolve(__dirname, 'dist/index.html'),
  chunks: ['bundle', 'app'],
});

const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
const cleanWebpackPlugin = new CleanWebpackPlugin(['dist']);
const uglifyJSPlugin = new UglifyJSPlugin();
const babelPolyfill = 'babel-polyfill';
const main = './src/index.js';

const serverConf = {
  port: 3030,
  historyApiFallback: true,
  hot: true,
  host: '0.0.0.0',
  contentBase: [path.resolve(__dirname), path.resolve(__dirname, 'dist')],
};

export default (env) => {
  const isDev = env === 'dev';

  const definePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': isDev ? '"development"' : '"production"',
    'process.env.API_URL': isDev
      ? '"http://localhost:3000"'
      : '"http://localhost:3000"',
    'process.env.API_VERSION': '"v1"',
  });

  const plugins = isDev ? [
    hotModuleReplacementPlugin,
    htmlWebpackPlugin,
    definePlugin,
  ] : [
    htmlWebpackPlugin,
    definePlugin,
    uglifyJSPlugin,
    cleanWebpackPlugin,
  ];

  const files = isDev ? [
    main,
    babelPolyfill,
    'react-hot-loader/patch',
  ] : [
    main,
    babelPolyfill,
  ];

  return {
    entry: files,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' },
        },
        {
          test: /\.spec\.js$/,
          use: { loader: 'ignore-loader' },
        },
      ],
    },
    devServer: isDev ? serverConf : {},
    resolve: {
      modules: [
        path.resolve(__dirname, 'dist'),
        'node_modules',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    plugins,
  };
};
