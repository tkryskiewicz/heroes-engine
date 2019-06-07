import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { Resources } from "heroes-core";
import { Resource } from "heroes-homm1";

import Readme = require("./README.md");

import { ResourceCost } from "./ResourceCost";

const cost: Resources = {
  [Resource.Gold]: 1000,
  [Resource.Mercury]: 10,
};

storiesOf("base|ResourceCost", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <ResourceCost
      cost={cost}
    />
  ));
