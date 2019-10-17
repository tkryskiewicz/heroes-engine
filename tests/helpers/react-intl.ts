/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import { mount, shallow } from "enzyme";
import React from "react";
import { IntlProvider } from "react-intl";

const defaultLocale = "en";
const locale = defaultLocale;

export function mountWithIntl(node: React.ReactElement) {
  return mount(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      defaultLocale,
      locale,
    },
  });
}

export function shallowWithIntl(node: React.ReactElement) {
  return shallow(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      defaultLocale,
      locale,
    },
  });
}
