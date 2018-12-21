import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Resources } from "heroes-core";
import { Resource } from "heroes-homm1";

import { ResourceCost } from "./ResourceCost";

const cost: Resources = {
  [Resource.Gold]: 1000,
  [Resource.Mercury]: 10,
};

storiesOf(`base/${ResourceCost.name}`, module)
  .add("default", () => (
    <ResourceCost
      cost={cost}
    />
  ));
