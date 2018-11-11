import { action } from "@storybook/addon-actions";
import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Town } from "heroes-core";
import { Alignment, ArmySize, HeroClass, TownId } from "heroes-homm1";

import { alignmentOptions, heroClassOptions, townOptions } from "../stories";
import { TownWindow } from "./TownWindow";

storiesOf(TownWindow.name, module)
  .add("default", () => {
    const town: Town = {
      alignment: select("Alignment", alignmentOptions, Alignment.Red),
      garrison: [],
      heroClass: select("Hero Class", heroClassOptions, HeroClass.Knight),
      id: select("Town", townOptions, TownId.Farm),
      structures: [],
    };

    const selectedGarrisonTroopIndex = number("Selected Garrison Troop Index", 0,
      { range: true, min: 0, max: ArmySize - 1, step: 1 });

    return (
      <TownWindow
        town={town}
        resources={{}}
        selectedGarrisonTroopIndex={selectedGarrisonTroopIndex}
        onSelectGarrisonTroop={action("Select Garrison Troop")}
        onSwapGarrisonTroops={action("Swap Garrison Troops")}
        onCrestClick={action("Crest Click")}
        onExitClick={action("Exit Click")}
      />
    );
  });
