import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Placeholder } from "../Placeholder";
import { AdventureMapWindow, AdventureMapWindowProps } from "./AdventureMapWindow";

// FIXME
const style: React.CSSProperties = {
  height: 32,
  width: 32,
};

const renderTile: AdventureMapWindowProps["renderTile"] = (index: number) => (
  <div style={style}>
    <Placeholder key={index} name={`${index}`} />
  </div>
);

storiesOf("AdventureMapWindow", module)
  .add("default", () => (
    <AdventureMapWindow
      width={number("Width", 10, { range: true, min: 0, max: 100, step: 1 })}
      height={number("Height", 10, { range: true, min: 0, max: 100, step: 1 })}
      renderTile={renderTile}
    />
  ));
