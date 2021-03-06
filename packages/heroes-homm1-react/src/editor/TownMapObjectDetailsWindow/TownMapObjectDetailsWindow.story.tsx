import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Troop } from "heroes-core";
import { CreatureId, creatures, playerColors, TownObjectDetails } from "heroes-homm1";

import { TownMapObjectDetailsWindow, TownMapObjectDetailsWindowProps } from "./TownMapObjectDetailsWindow";

const data: TownMapObjectDetailsWindowProps["data"] = {
  creatures: creatures.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  playerColors,
};

storiesOf("editor|TownMapObjectDetailsWindow", module)
  .add("default", () => {
    const armySize = number("Army Size", 5, { range: true, min: 1, max: 5, step: 1 });

    const value: TownObjectDetails = {
      army: [...new Array(armySize).keys()].map<Troop>(() => ({
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
