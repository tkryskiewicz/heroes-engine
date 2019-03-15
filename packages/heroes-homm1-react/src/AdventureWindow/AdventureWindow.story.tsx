import { storiesOf } from "@storybook/react";
import * as React from "react";

import { createMap } from "heroes-core";
import { TerrainType } from "heroes-homm1";

import { AdventureWindow } from "./AdventureWindow";

const map = createMap(14, 14, TerrainType.Grass);

storiesOf("AdventureWindow", module)
  .add("default", () => (
    <AdventureWindow
      map={map}
    />
  ));
