import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { RandomCreatureMapObject, RandomCreatureMapObjectProps } from "./RandomCreatureMapObject";

const sizeOptions: { readonly [s: string]: RandomCreatureMapObjectProps["size"] } = {
  Large: "large",
  Small: "small",
};

storiesOf("map/RandomCreatureMapObject", module)
  .add("default", () => (
    <RandomCreatureMapObject
      size={select("Size", sizeOptions, "large")}
    />
  ))
  .add("specific level", () => (
    <RandomCreatureMapObject
      size={select("Size", sizeOptions, "large")}
      level={number("Level", 1, { range: true, min: 1, max: 4, step: 1 })}
    />
  ));
