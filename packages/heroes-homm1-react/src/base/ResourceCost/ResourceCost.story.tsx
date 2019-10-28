import { storiesOf } from "@storybook/react";
import React from "react";

import { Resources } from "heroes-core";
import { ResourceId } from "heroes-homm1";

import { ResourceCost } from "./ResourceCost";

const cost: Resources = {
  [ResourceId.Gold]: 1000,
  [ResourceId.Mercury]: 10,
};

storiesOf("base|ResourceCost", module)
  .add("default", () => (
    <ResourceCost
      cost={cost}
    />
  ));
