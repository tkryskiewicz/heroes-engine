import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { heroClass, playerColor } from "../../stories";
import { Crest } from "./Crest";

storiesOf("base|Crest", module)
  .add("default", () => (
    <Crest
      playerColor={playerColor("Player Color")}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ))
  .add("hero crest", () => (
    <Crest
      playerColor={playerColor("Player Color")}
      heroClass={heroClass("Hero Class")}
      onClick={action("Click")}
    />
  ));
