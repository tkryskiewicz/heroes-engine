import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { resource } from "../../stories";
import { MineOverview } from "./MineOverview";

storiesOf("base|MineOverview", module)
  .add("deafult", () => (
    <MineOverview
      resource={resource("Resource")}
      count={number("Count", 0, { range: true, min: 0, max: 99, step: 1 })}
    />
  ));
