import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { alignment, mapObjectSize, resource } from "../../stories";
import { MineMapObject } from "./MineMapObject";

const variantOptions = [
  "grass",
  "snow",
  "swamp",
  "desert",
  "dirt",
];

storiesOf("map/MineMapObject", module)
  .add("default", () => (
    <MineMapObject
      size={mapObjectSize("Size")}
      resource={resource("Resource")}
      variant={select("Variant", variantOptions, "grass")}
    />
  ))
  .add("aligned", () => (
    <MineMapObject
      size={mapObjectSize("Size")}
      resource={resource("Resource")}
      variant={select("Variant", variantOptions, "grass")}
      alignment={alignment("Alignment")}
    />
  ));
