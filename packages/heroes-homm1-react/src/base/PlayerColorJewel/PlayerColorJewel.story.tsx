import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { playerColor } from "../../stories";
import { PlayerColorJewel } from "./PlayerColorJewel";

storiesOf("base|PlayerColorJewel", module)
  .add("default", () => (
    <PlayerColorJewel
      value={playerColor("Value")}
      onClick={action("Click")}
    />
  ));
