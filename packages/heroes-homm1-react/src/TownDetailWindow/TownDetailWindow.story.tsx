import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameText } from "../core";
import { TownDetailWindow } from "./TownDetailWindow";

storiesOf("TownDetailWindow", module)
  .add("default", () => (
    <TownDetailWindow
      visible={boolean("Visible", true)}
      statusText={text("Status Text", "Status Text")}
      onExitMouseEnter={action("Exit Mouse Enter")}
      onExitMouseLeave={action("Exit Mouse Leave")}
      onExitClick={action("Exit Click")}
    >
      <GameText size="large">
        {text("Content", "Content")}
      </GameText>
    </TownDetailWindow>
  ));
