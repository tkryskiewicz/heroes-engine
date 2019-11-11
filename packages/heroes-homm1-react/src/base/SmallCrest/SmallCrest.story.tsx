import { storiesOf } from "@storybook/react";
import React from "react";

import { heroClass, playerColor } from "../../stories";
import { SmallCrest } from "./SmallCrest";

storiesOf("base|SmallCrest", module)
  .add("default", () => (
    <SmallCrest
      playerColor={playerColor("Player Color")}
      heroClass={heroClass("Hero Class")}
    />
  ));
