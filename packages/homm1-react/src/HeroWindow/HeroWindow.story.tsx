import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Hero } from "heroes-core";
import { Alignment, ArmySize, CreatureId, HeroClass, HeroId } from "heroes-homm1";

import { alignmentOptions, heroClassOptions, heroOptions } from "../stories";
import { HeroWindow } from "./HeroWindow";

storiesOf(HeroWindow.name, module)
  .add("default", () => {
    const hero: Hero = {
      alignment: select("Alignment", alignmentOptions, Alignment.Red),
      army: [
        {
          count: 1,
          creature: CreatureId.Peasant,
        },
      ],
      heroClass: select("Hero Class", heroClassOptions, HeroClass.Knight),
      id: select("Hero", heroOptions, HeroId.LordKilburn),
      mobility: 0,
      skills: {},
    };

    return (
      <HeroWindow
        hero={hero}
        selectedTroopIndex={number("Selected Troop Index", 0, { range: true, min: 0, max: ArmySize - 1, step: 1 })}
        onSelectTroop={action("Select Troop")}
        onSelectedTroopClick={action("Selected Troop Click")}
        onSwapTroops={action("Swap Troops")}
        dismissHeroPromptVisible={boolean("Dismiss Hero Prompt Visible", false)}
        onDismissHeroClick={action("Dismiss Hero Click")}
        onCancelDismissHeroClick={action("Cancel Dismiss Hero Click")}
        onDismissHero={action("Dismiss Hero")}
        onExitClick={action("Exit Click")}
      />
    );
  });
