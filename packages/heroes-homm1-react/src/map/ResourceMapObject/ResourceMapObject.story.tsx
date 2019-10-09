import { storiesOf } from "@storybook/react";
import React from "react";

import { mapObjectSize, resource } from "../../stories";
import { ResourceMapObject } from "./ResourceMapObject";

storiesOf("map|ResourceMapObject", module)
  .add("default", () => (
    <ResourceMapObject
      size={mapObjectSize("Size")}
      resource={resource("Resource")}
    />
  ));
