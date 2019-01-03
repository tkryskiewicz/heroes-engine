import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { Resource } from "heroes-homm1";

import Readme = require("./README.md");

import { resourceOptions } from "../../stories";
import { ResourceAmount } from "./ResourceAmount";

storiesOf("base/ResourceAmount", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <ResourceAmount
      resource={select("Resource", resourceOptions, Resource.Gold)}
      amount={number("Amount", 0, { range: true, min: 0, max: 9999, step: 1 })}
    />
  ));
