
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { alignment, mapObjectSize, resource } from "../../stories";
import { MineMapObject } from "./MineMapObject";

storiesOf("map/MineMapObject", module)
  .add("default", () => (
    <MineMapObject
      size={mapObjectSize("Size")}
      resource={resource("Resource")}
    />
  ))
  .add("aligned", () => (
    <MineMapObject
      size={mapObjectSize("Size")}
      resource={resource("Resource")}
      alignment={alignment("Alignment")}
    />
  ));
