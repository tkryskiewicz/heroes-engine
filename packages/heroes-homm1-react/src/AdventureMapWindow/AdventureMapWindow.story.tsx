import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Placeholder } from "../Placeholder";
import { AdventureMapWindow } from "./AdventureMapWindow";

const renderCell = (index: number) => <Placeholder key={index} name={`${index}`} />;

storiesOf("AdventureMapWindow", module)
  .add("default", () => (
    <AdventureMapWindow
      width={number("Width", 10, { range: true, min: 0, max: 50, step: 1 })}
      height={number("Height", 10, { range: true, min: 0, max: 50, step: 1 })}
      cellSize={number("Cell Size", 32, { range: true, min: 16, max: 48, step: 8 })}
      renderCell={renderCell}
    />
  ));
