import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Alignment, HeroClass } from "heroes-homm1";

import { alignmentOptions, heroClassOptions } from "../../stories";
import { CombatWindow } from "../CombatWindow";
import { Tent } from "./Tent";

storiesOf(`${CombatWindow.name}/${Tent.name}`, module)
  .add("default", () => (
    <Tent
      alignment={select("Alignment", alignmentOptions, Alignment.Red)}
      heroClass={select("Hero Class", heroClassOptions, HeroClass.Knight)}
      onClick={action("Click")}
    />
  ));
