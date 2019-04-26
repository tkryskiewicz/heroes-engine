import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Placeholder } from "../Placeholder";
import { AdventureWindow, AdventureWindowProps } from "./AdventureWindow";

// FIXME
const style: React.CSSProperties = {
  height: 32,
  width: 32,
};

const renderTile: AdventureWindowProps["renderTile"] = (index: number) => (
  <div style={style}>
    <Placeholder key={index} name={`${index}`} />
  </div>
);

storiesOf("AdventureWindow", module)
  .add("default", () => (
    <AdventureWindow
      width={number("Width", 10, { range: true, min: 0, max: 100, step: 1 })}
      height={number("Height", 10, { range: true, min: 0, max: 100, step: 1 })}
      x={number("X", 0, { range: true, min: 0, max: 100, step: 1 })}
      y={number("Y", 0, { range: true, min: 0, max: 100, step: 1 })}
      renderTile={renderTile}
    />
  ));
