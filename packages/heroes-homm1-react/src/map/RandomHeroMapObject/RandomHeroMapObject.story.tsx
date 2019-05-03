import { storiesOf } from "@storybook/react";
import * as React from "react";

import { mapObjectSize } from "../../stories";
import { RandomHeroMapObject } from "./RandomHeroMapObject";

storiesOf("map/RandomHeroMapObject", module)
  .add("default", () => (
    <RandomHeroMapObject
      size={mapObjectSize("Size")}
    />
  ));
