
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { alignment, resource } from "../../stories";
import { MineMapObject } from "./MineMapObject";

storiesOf("map/MineMapObject", module)
  .add("default", () => (
    <MineMapObject
      resource={resource("Resource")}
    />
  ))
  .add("owned", () => (
    <MineMapObject
      resource={resource("Resource")}
      alignment={alignment("Alignment")}
    />
  ));
