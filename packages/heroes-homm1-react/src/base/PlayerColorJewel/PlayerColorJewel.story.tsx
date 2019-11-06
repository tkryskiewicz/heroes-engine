import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { alignment } from "../../stories";
import { PlayerColorJewel } from "./PlayerColorJewel";

storiesOf("base|PlayerColorJewel", module)
  .add("default", () => (
    <PlayerColorJewel
      value={alignment("Value")}
      onClick={action("Click")}
    />
  ));
