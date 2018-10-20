import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Alignment, HeroClass } from "heroes-homm1";

import { alignmentOptions, heroClassOptions } from "../stories";
import { Crest, CrestProps } from "./Crest";

const sizeOptions: { [s: string]: CrestProps["size"] } = {
  Large: "large",
  Small: "small",
};

storiesOf(Crest.name, module)
  .add("default", () => (
    <Crest
      size={select("Size", sizeOptions, "large")}
      alignment={select("Alignment", alignmentOptions, Alignment.Red)}
      heroClass={select("Hero Class", heroClassOptions, HeroClass.Knight)}
      onClick={action("Click")}
    />
  ));
