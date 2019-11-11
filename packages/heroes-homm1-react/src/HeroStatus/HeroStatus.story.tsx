import { storiesOf } from "@storybook/react";
import React from "react";

import { Army } from "heroes-core";
import { CreatureId } from "heroes-homm1";

import { hero, heroClass, playerColor } from "../stories";
import { HeroStatus } from "./HeroStatus";

const army: Army = [
  { creature: CreatureId.Peasant, count: 1 },
  { creature: CreatureId.Archer, count: 1 },
  { creature: CreatureId.Pikeman, count: 1 },
  { creature: CreatureId.Swordsman, count: 1 },
  { creature: CreatureId.Cavalry, count: 1 },
];

storiesOf("HeroStatus", module)
  .add("default", () => (
    <HeroStatus
      playerColor={playerColor("Player Color")}
      heroClass={heroClass("Hero Class")}
      hero={hero("Hero")}
      army={army}
    />
  ));
