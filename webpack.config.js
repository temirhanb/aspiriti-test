const path = require('path')
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const HtmlPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve("./src/app/index.tsx"),
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "/"),
    },
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {test: /\.([cm]?ts|tsx)$/, loader: "ts-loader"},
      {
        use: ['style-loader', 'css-loader', {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [tailwindcss, autoprefixer]
            },
          },
        }],
        test: /\.css$/i,
      },
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlPlugin({template: "public/index.html"})
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },

}
