import { storiesOf } from "@storybook/react";
import React from "react";

import { playerColor } from "../stories";
import { TurnStatus } from "./TurnStatus";

storiesOf("TurnStatus", module)
  .add("default", () => (
    <TurnStatus
      playerColor={playerColor("Player Color")}
    />
  ));
