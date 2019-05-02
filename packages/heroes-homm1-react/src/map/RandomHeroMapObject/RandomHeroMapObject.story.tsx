import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { RandomHeroMapObject, RandomHeroMapObjectProps } from "./RandomHeroMapObject";

const sizeOptions: { readonly [s: string]: RandomHeroMapObjectProps["size"] } = {
  Large: "large",
  Small: "small",
};

storiesOf("map/RandomHeroMapObject", module)
  .add("default", () => (
    <RandomHeroMapObject
      size={select("Size", sizeOptions, "large")}
    />
  ));
