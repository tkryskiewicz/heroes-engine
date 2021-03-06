import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { resource, textSize } from "../../stories";
import { ResourceAmount } from "./ResourceAmount";

storiesOf("base|ResourceAmount", module)
  .add("default", () => (
    <ResourceAmount
      textSize={textSize("Text Size")}
      resource={resource("Resource")}
      amount={number("Amount", 0, { range: true, min: 0, max: 9999, step: 1 })}
    />
  ));
