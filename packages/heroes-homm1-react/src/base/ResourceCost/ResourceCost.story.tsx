import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { Resources } from "heroes-core";
import { ResourceId } from "heroes-homm1";

import Readme = require("./README.md");

import { ResourceCost } from "./ResourceCost";

const cost: Resources = {
  [ResourceId.Gold]: 1000,
  [ResourceId.Mercury]: 10,
};

storiesOf("base|ResourceCost", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <ResourceCost
      cost={cost}
    />
  ));
