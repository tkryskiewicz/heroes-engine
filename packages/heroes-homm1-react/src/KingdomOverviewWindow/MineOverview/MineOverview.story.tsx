import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { resource } from "../../stories";
import { MineOverview } from "./MineOverview";

storiesOf("KingdomOverviewWindow/MineOverview", module)
  .add("deafult", () => (
    <MineOverview
      resource={resource("Resource")}
      count={number("Count", 0, { range: true, min: 0, max: 99, step: 1 })}
    />
  ));
