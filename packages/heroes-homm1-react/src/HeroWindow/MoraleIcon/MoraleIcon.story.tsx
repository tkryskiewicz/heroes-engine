import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { MoraleIcon, MoraleIconProps } from "./MoraleIcon";

const moraleOptions: { readonly [s: string]: MoraleIconProps["type"] } = {
  Bad: "bad",
  Good: "good",
  Neutral: "neutral",
};

storiesOf("HeroWindow/MoraleIcon", module)
  .add("default", () => (
    <MoraleIcon
      type={select("Type", moraleOptions, "neutral")}
      onClick={action("Click")}
    />
  ));
