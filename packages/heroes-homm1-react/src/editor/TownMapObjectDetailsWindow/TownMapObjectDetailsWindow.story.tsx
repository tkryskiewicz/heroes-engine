import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameData, Troop } from "heroes-core";
import { alignments, CreatureId, creatures, TownMapObjectDetails } from "heroes-homm1";

import { TownMapObjectDetailsWindow } from "./TownMapObjectDetailsWindow";

const data: GameData = {
  alignments,
  armySize: 0,
  creatures: creatures.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  heroClasses: {},
  heroes: {},
  items: {},
  mapObjects: {},
  resources: {},
  spells: {},
  terrains: [],
};

storiesOf("editor/TownMapObjectDetailsWindow", module)
  .add("default", () => {
    const value: TownMapObjectDetails = {
      army: [...new Array(5).keys()].map<Troop>(() => ({
        count: 0,
        creature: CreatureId.Peasant,
      })),
      customized: boolean("Customized", false),
    };

    return (
      <TownMapObjectDetailsWindow
        visible={boolean("Visible", true)}
        data={data}
        value={value}
        onValueChange={action("Value Change")}
        onConfirmClick={action("Confirm Click")}
        onCancelClick={action("Cancel Click")}
      />
    );
  });
