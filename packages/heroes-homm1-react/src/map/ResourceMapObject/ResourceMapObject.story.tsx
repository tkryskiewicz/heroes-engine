import { storiesOf } from "@storybook/react";
import * as React from "react";

import { resource } from "../../stories";
import { ResourceMapObject } from "./ResourceMapObject";

storiesOf("map/ResourceMapObject", module)
  .add("default", () => (
    <ResourceMapObject
      resource={resource("Resource")}
    />
  ));
