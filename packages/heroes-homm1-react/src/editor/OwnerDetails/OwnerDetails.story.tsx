import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { playerColors } from "heroes-homm1";

import { playerColor } from "../../stories";
import { OwnerDetails } from "./OwnerDetails";

storiesOf("editor|OwnerDetails", module)
  .add("default", () => (
    <OwnerDetails
      playerColors={playerColors}
      allowNeutral={boolean("Allow Netural", false)}
      value={playerColor("Value")}
      onValueChange={action("Value Change")}
    />
  ));
