import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { HeroId } from "heroes-homm1";

import { heroOptions } from "../../stories";
import { HeroPortrait } from "./HeroPortrait";

storiesOf("base/HeroPortrait", module)
  .add("default", () => (
    <HeroPortrait
      hero={select("Hero", heroOptions, HeroId.LordKilburn)}
      onClick={action("Click")}
    />
  ))
  .add("empty", () => (
    <HeroPortrait
      onClick={action("Click")}
    />
  ));
