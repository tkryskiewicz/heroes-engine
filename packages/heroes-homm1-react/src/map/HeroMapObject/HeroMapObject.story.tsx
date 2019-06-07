import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { alignment, heroClass, mapObjectOrientation } from "../../stories";
import { HeroMapObject } from "./HeroMapObject";

storiesOf("map|HeroMapObject", module)
  .add("default", () => (
    <HeroMapObject
      heroClass={heroClass("Hero Class")}
      alignment={boolean("Aligned?", true) ? alignment("Alignment") : undefined}
      orientation={mapObjectOrientation("Orientation")}
      onClick={action("Click")}
    />
  ));
