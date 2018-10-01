import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameSwitch, GameSwitchType } from "./GameSwitch";

const typeOptions: { [s: string]: GameSwitchType } = {
  AutoSave: "auto-save",
  Effects: "effects",
  Music: "music",
  ShowPath: "show-path",
  ViewEnemyMovement: "view-enemy-movement",
};

storiesOf(GameSwitch.name, module)
  .add("default", () => (
    <GameSwitch
      type={select("Type", typeOptions, "music")}
      checked={boolean("Checked", false)}
      onChange={action("Change")}
    />
  ));
