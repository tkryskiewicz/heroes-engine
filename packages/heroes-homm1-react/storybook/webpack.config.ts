import * as Webpack from "webpack";

import devConfig from "../webpack.config";

export default async ({ config }: { readonly config: Webpack.Configuration }) => {
  config.module!.rules = [
    ...devConfig.module!.rules,
    // FIXME: remove, Storybook already has markdown loader
    {
      test: /\.md$/,
      use: [
        "html-loader",
        "markdown-loader",
      ],
    },
  ];
  config.resolve!.extensions = devConfig.resolve!.extensions;
  config.resolve!.plugins = devConfig.resolve!.plugins;

  return config;
};
