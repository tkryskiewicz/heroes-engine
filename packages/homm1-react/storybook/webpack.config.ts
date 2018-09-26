import * as Webpack from "webpack";

import config from "../webpack.config";

export default (_baseConfig: Webpack.Configuration, _env: string, defaultConfig: Webpack.Configuration) => {
  defaultConfig.module!.rules = config.module!.rules;
  defaultConfig.resolve!.extensions = config.resolve!.extensions;
  defaultConfig.resolve!.plugins = config.resolve!.plugins;

  return defaultConfig;
};
