import { storiesOf } from "@storybook/react";
import React from "react";

import { ResourceId } from "heroes-homm1";

import { resourceAmounts, textSize } from "../../stories";
import { ResourceCost } from "./ResourceCost";

storiesOf("base|ResourceCost", module)
  .add("default", () => (
    <ResourceCost
      textSize={textSize("Text Size")}
      value={resourceAmounts("Value", { [ResourceId.Gold]: 1000, [ResourceId.Mercury]: 10 })}
    />
  ));
