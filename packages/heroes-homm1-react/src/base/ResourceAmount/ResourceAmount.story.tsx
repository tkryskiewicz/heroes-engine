import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { resource } from "../../stories";
import { ResourceAmount } from "./ResourceAmount";

storiesOf("base|ResourceAmount", module)
  .add("default", () => (
    <ResourceAmount
      resource={resource("Resource")}
      amount={number("Amount", 0, { range: true, min: 0, max: 9999, step: 1 })}
    />
  ));
