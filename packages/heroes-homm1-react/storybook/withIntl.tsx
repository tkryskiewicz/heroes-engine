import { StoryDecorator } from "@storybook/react";
import * as React from "react";
import { IntlProvider } from "react-intl";

export const withIntl: StoryDecorator = (story) => (
  <IntlProvider>
    {story()}
  </IntlProvider>
);
