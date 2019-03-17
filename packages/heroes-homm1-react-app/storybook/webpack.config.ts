import * as Webpack from "webpack";

import config from "../webpack.config";

export default (_baseConfig: Webpack.Configuration, _env: string, defaultConfig: Webpack.Configuration) => {
  defaultConfig.module!.rules = [
    ...config.module!.rules,
    // FIXME: remove, Storybook already has markdown loader
    {
      test: /\.md$/,
      use: [
        "html-loader",
        "markdown-loader",
      ],
    },
  ];
  defaultConfig.resolve!.extensions = config.resolve!.extensions;
  defaultConfig.resolve!.plugins = config.resolve!.plugins;

  return defaultConfig;
};
