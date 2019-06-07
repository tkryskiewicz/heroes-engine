import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { alignment, mapObjectSize, town } from "../../stories";
import { TownMapObject } from "./TownMapObject";

storiesOf("map|TownMapObject", module)
  .add("default", () => (
    <TownMapObject
      size={mapObjectSize("Size")}
      town={town("Town")}
      isCastleBuilt={boolean("Is Castle Built?", false)}
      alignment={boolean("Aligned?", true) ? alignment("Alignment") : undefined}
      onClick={action("Click")}
    />
  ));
