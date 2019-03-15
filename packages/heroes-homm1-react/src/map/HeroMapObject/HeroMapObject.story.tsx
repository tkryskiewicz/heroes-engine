import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { MapObjectOrientation, MapObjectOrientations } from "heroes-core";

import { alignment, heroClass } from "../../stories";
import { HeroMapObject } from "./HeroMapObject";

storiesOf("map/HeroMapObject", module)
  .add("default", () => (
    <HeroMapObject
      heroClass={heroClass("Hero Class")}
      alignment={alignment("Alignment")}
      orientation={select("Orientation", MapObjectOrientations, MapObjectOrientation.North)}
      onClick={action("Click")}
    />
  ));
