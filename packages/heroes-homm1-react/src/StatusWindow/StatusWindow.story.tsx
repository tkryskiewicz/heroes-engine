import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameText } from "../core";
import { StatusWindow } from "./StatusWindow";

storiesOf("StatusWindow", module)
  .add("default", () => (
    <StatusWindow>
      <GameText size="normal">
        CONTENT
      </GameText>
    </StatusWindow>
  ));
