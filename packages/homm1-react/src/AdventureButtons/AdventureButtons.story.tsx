import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Hero } from "heroes-core";
import { Alignment, HeroClass, HeroId, MaxMobility } from "heroes-homm1";

import { AdventureButtons } from "./AdventureButtons";

const heroes: Hero[] = [
  {
    alignment: Alignment.Red,
    heroClass: HeroClass.Knight,
    id: HeroId.LordKilburn,
    mobility: MaxMobility,
    skills: {},
  },
  {
    alignment: Alignment.Red,
    heroClass: HeroClass.Barbarian,
    id: HeroId.Antoine,
    mobility: MaxMobility,
    skills: {},
  },
  {
    alignment: Alignment.Red,
    heroClass: HeroClass.Sorceress,
    id: HeroId.Ariel,
    mobility: 0,
    skills: {},
  },
];

storiesOf(AdventureButtons.name, module)
  .add("default", () => {
    const selectHero = boolean("Select Hero", false);
    const selectedIndex = selectHero ?
      number("Selected Index", 0, { range: true, min: 0, max: heroes.length - 1, step: 1 }) :
      undefined;

    return (
      <AdventureButtons
        heroes={heroes}
        selectedIndex={selectedIndex}
        onSelectHero={action("Select Hero")}
        onMoveClick={action("Move Click")}
        onKingdomOverviewClick={action("Kingdom Overview Click")}
        onEndTurnClick={action("End Turn Click")}
        onAdventureOptionsClick={action("Adventure Options Click")}
        onGameOptionsClick={action("Game Options Click")}
      />
    );
  });
