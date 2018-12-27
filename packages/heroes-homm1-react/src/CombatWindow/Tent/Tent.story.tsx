import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CombatSide } from "heroes-core";
import { Alignment, HeroClass } from "heroes-homm1";

import { alignmentOptions, combatSideOptions, heroClassOptions } from "../../stories";
import { CombatWindow } from "../CombatWindow";
import { Tent } from "./Tent";

storiesOf(`${CombatWindow.name}/${Tent.name}`, module)
  .add("default", () => (
    <Tent
      side={select("Side", combatSideOptions, CombatSide.Attacker)}
      alignment={select("Alignment", alignmentOptions, Alignment.Red)}
      heroClass={select("Hero Class", heroClassOptions, HeroClass.Knight)}
      onClick={action("Click")}
    />
  ));
