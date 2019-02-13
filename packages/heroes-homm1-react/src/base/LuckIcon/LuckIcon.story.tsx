import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { LuckIcon, LuckIconProps } from "./LuckIcon";

const luckOptions: { readonly [s: string]: LuckIconProps["type"] } = {
  Bad: "bad",
  Good: "good",
  Neutral: "neutral",
};

storiesOf("base/LuckIcon", module)
  .add("default", () => (
    <LuckIcon
      type={select("Type", luckOptions, "neutral")}
      onClick={action("Click")}
    />
  ));
