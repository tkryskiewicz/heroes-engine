import { StoryDecorator } from "@storybook/react";
import * as React from "react";
import { IntlProvider } from "react-intl";

export const withIntl: StoryDecorator = (story) => (
  <IntlProvider defaultLocale="en" locale="en">
    {story()}
  </IntlProvider>
);
