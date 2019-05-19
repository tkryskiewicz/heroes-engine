import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameData } from "heroes-core";
import { alignments, artifacts, CreatureId, creatures, heroes, HeroMapObjectDetails } from "heroes-homm1";

import { alignment, hero } from "../../stories";
import { HeroMapObjectDetailsWindow } from "./HeroMapObjectDetailsWindow";

const data: GameData = {
  alignments,
  armySize: 5,
  creatures: creatures.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  heroClasses: {},
  heroes: heroes.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  items: artifacts.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  mapObjects: {},
  resources: {},
  spells: {},
  terrains: [],
};

storiesOf("editor/HeroMapObjectDetailsWindow", module)
  .add("default", () => {
    const value: HeroMapObjectDetails = {
      alignment: alignment("Alignment"),
      army: [...new Array(data.armySize).keys()]
        .map(() => ({ creature: CreatureId.Peasant, count: 0 })),
      artifacts: [],
      experience: number("Experience", 0, { range: true, min: 0, max: 99999, step: 1 }),
      hero: hero("Hero"),
    };

    return (
      <HeroMapObjectDetailsWindow
        visible={boolean("Visible", true)}
        data={data}
        value={value}
        onValueChange={action("Value Change")}
        onConfirmClick={action("Confirm Click")}
        onCancelClick={action("Cancel Click")}
      />
    );
  });
