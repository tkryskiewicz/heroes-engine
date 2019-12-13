import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import {
  artifacts,
  CreatureId,
  creatures,
  EditorHeroArtifactCount,
  EditorMaxCreatureCount,
  EditorMaxHeroExperience,
  heroes,
  HeroObjectDetails,
  playerColors,
} from "heroes-homm1";

import { hero, playerColor } from "../../stories";
import { HeroMapObjectDetailsWindow, HeroMapObjectDetailsWindowProps } from "./HeroMapObjectDetailsWindow";

const data: HeroMapObjectDetailsWindowProps["data"] = {
  creatures: creatures.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  editor: {
    heroArtifactCount: EditorHeroArtifactCount,
    maxCreatureCount: EditorMaxCreatureCount,
    maxHeroExperience: EditorMaxHeroExperience,
  },
  heroes: heroes.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  items: artifacts.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  playerColors,
};

storiesOf("editor|HeroMapObjectDetailsWindow", module)
  .add("default", () => {
    const armySize = number("Army Size", 5, { range: true, min: 1, max: 5, step: 1 });

    const value: HeroObjectDetails = {
      army: [...new Array(armySize).keys()]
      .map(() => ({ creature: CreatureId.Peasant, count: 0 })),
      artifacts: [],
      experience: number("Experience", 0, { range: true, min: 0, max: 99999, step: 1 }),
      heroId: hero("Hero"),
      owner: playerColor("Owner"),
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
