import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { resource } from "../stories";
import { ResourcePickupStatus } from "./ResourcePickupStatus";

storiesOf("ResourcePickupStatus", module)
  .add("default", () => (
    <ResourcePickupStatus
      resource={resource("Resource")}
      amount={number("Amount", 0, { range: true, min: 0, max: 99, step: 1 })}
    />
  ));
