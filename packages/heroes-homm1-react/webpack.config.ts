import { TsConfigPathsPlugin } from "awesome-typescript-loader";
import Webpack from "webpack";

const styleRegex = /\.(scss|css)$/;
const styleModuleRegex = /\.module\.scss$/;

const config: Webpack.Configuration = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        loader: "awesome-typescript-loader",
        test: /\.tsx?$/,
      },
      {
        exclude: styleModuleRegex,
        test: styleRegex,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: styleModuleRegex,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              localsConvention: "dashes",
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        loader: "file-loader",
        options: {
          name: "[name]-[hash].[ext]",
        },
        test: /\.(jpg|png)$/,
      },
    ],
  },
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
