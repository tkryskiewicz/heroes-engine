import { TsConfigPathsPlugin } from "awesome-typescript-loader";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as Webpack from "webpack";

const config: Webpack.Configuration = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        loader: "awesome-typescript-loader",
        test: /\.tsx?$/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".js",
    ],
    plugins: [
      new TsConfigPathsPlugin(),
    ],
  },
};

export default config;
