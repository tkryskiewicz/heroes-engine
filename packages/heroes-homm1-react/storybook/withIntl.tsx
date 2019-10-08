import { DecoratorFn } from "@storybook/react";
import * as React from "react";
import { IntlProvider } from "react-intl";

export const withIntl: DecoratorFn = (story) => (
  <IntlProvider defaultLocale="en" locale="en">
    {story()}
  </IntlProvider>
);
