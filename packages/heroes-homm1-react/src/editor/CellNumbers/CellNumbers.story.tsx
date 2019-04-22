import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CellNumbers, CellNumbersProps } from "./CellNumbers";

const sizeOptions: { readonly [index: string]: CellNumbersProps["size"] } = {
  Large: "large",
  Small: "small",
};

const orientationOptions: { readonly [index: string]: CellNumbersProps["orientation"] } = {
  Horizontal: "horizontal",
  Vertical: "vertical",
};

storiesOf("editor/CellNumbers", module)
  .add("default", () => (
    <CellNumbers
      size={select("Size", sizeOptions, "large")}
      orientation={select("Orientation", orientationOptions, "horizontal")}
      from={number("From", 0, { range: true, min: 0, max: 50, step: 1 })}
      to={number("To", 10, { range: true, min: 0, max: 50, step: 1 })}
      active={boolean("Active?", false) ? number("Active", 0, { range: true, min: 0, max: 50, step: 1 }) : undefined}
    />
  ));
