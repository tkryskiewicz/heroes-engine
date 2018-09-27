import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { HeroId } from "heroes-homm1";

import { heroOptions } from "../stories";
import { HeroPortrait, HeroPortraitProps } from "./HeroPortrait";

const sizeOptions: { [s: string]: HeroPortraitProps["size"] } = {
  Large: "large",
  Small: "small",
};

storiesOf(HeroPortrait.name, module)
  .add("default", () => (
    <HeroPortrait
      size={select("Size", sizeOptions, "large")}
      hero={select("Hero", heroOptions, HeroId.LordKilburn)}
      onClick={action("Click")}
    />
  ));
