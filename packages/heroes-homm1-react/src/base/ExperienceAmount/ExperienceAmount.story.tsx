import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ExperienceAmount } from "./ExperienceAmount";

storiesOf("base|ExperienceAmount", module)
  .add("default", () => (
    <ExperienceAmount
      amount={number("Amount", 0, { range: true, min: 0, max: 9999, step: 1 })}
    />
  ));
