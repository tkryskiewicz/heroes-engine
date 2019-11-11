import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { mapObjectSize, playerColor, resource } from "../../stories";
import { MineMapObject, MineMapObjectProps } from "./MineMapObject";

const variantOptions: MineMapObjectProps["variant"][] = [
  "grass",
  "snow",
  "swamp",
  "desert",
  "dirt",
];

storiesOf("map|MineMapObject", module)
  .add("default", () => (
    <MineMapObject
      size={mapObjectSize("Size")}
      resource={resource("Resource")}
      variant={select("Variant", variantOptions, "grass")}
    />
  ))
  .add("owned", () => (
    <MineMapObject
      size={mapObjectSize("Size")}
      resource={resource("Resource")}
      variant={select("Variant", variantOptions, "grass")}
      playerColor={playerColor("Player Color")}
    />
  ));
