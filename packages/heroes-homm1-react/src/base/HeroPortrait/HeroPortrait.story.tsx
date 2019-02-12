import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { hero } from "../../stories";
import { HeroPortrait } from "./HeroPortrait";

storiesOf("base/HeroPortrait", module)
  .add("default", () => (
    <HeroPortrait
      hero={hero("Hero")}
      onClick={action("Click")}
    />
  ))
  .add("empty", () => (
    <HeroPortrait
      onClick={action("Click")}
    />
  ));
