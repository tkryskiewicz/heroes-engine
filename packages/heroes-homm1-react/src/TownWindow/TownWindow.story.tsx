import { action } from "@storybook/addon-actions";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { Town } from "heroes-core";
import { Alignment, ArmySize, TownId } from "heroes-homm1";

import Readme = require("./README.md");

import { alignmentOptions, heroClass, townOptions } from "../stories";
import { TownWindow } from "./TownWindow";

storiesOf("TownWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => {
    const town: Town = {
      alignment: select("Alignment", alignmentOptions, Alignment.Red),
      canConstructStructures: boolean("Can Construct Structures", true),
      garrison: [],
      heroClass: heroClass("Hero Class"),
      id: select("Town", townOptions, TownId.Farm),
      name: text("Town Name", "Town Name"),
      structures: [],
    };

    const selectedGarrisonTroopIndex = number("Selected Garrison Troop Index", 0,
      { range: true, min: 0, max: ArmySize - 1, step: 1 });

    return (
      <TownWindow
        town={town}
        resources={{}}
        visible={boolean("Visible", true)}
        selectedGarrisonTroopIndex={selectedGarrisonTroopIndex}
        onSelectGarrisonTroop={action("Select Garrison Troop")}
        onSwapGarrisonTroops={action("Swap Garrison Troops")}
        onCrestClick={action("Crest Click")}
        onExitClick={action("Exit Click")}
      />
    );
  });
