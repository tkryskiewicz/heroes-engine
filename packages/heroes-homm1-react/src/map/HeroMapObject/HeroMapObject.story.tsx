import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { direction, heroClass, playerColor } from "../../stories";
import { HeroMapObject } from "./HeroMapObject";

storiesOf("map|HeroMapObject", module)
  .add("default", () => (
    <HeroMapObject
      heroClass={heroClass("Hero Class")}
      playerColor={boolean("Owned?", true) ? playerColor("Player Color") : undefined}
      orientation={direction("Orientation")}
      onClick={action("Click")}
    />
  ));
