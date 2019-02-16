import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { Town } from "heroes-core";

import Readme = require("./README.md");

import { GameText } from "../core";
import { alignment, heroClass, town, troopIndex } from "../stories";
import { TownWindow } from "./TownWindow";

const renderCrest = () => <GameText size="small">Crest</GameText>;
const renderTreasury = () => <GameText size="small">Treasury</GameText>;

storiesOf("TownWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => {
    const t: Town = {
      alignment: alignment("Alignment"),
      canConstructStructures: boolean("Can Construct Structures", true),
      garrison: [],
      heroClass: heroClass("Hero Class"),
      id: town("Town"),
      name: text("Town Name", "Town Name"),
      structures: [],
    };

    const selectedGarrisonTroopIndex = troopIndex("Selected Garrison Troop Index");

    return (
      <TownWindow
        town={t}
        resources={{}}
        visible={boolean("Visible", true)}
        renderCrest={renderCrest}
        renderTreasury={renderTreasury}
        selectedGarrisonTroopIndex={selectedGarrisonTroopIndex}
        onSelectGarrisonTroop={action("Select Garrison Troop")}
        onSwapGarrisonTroops={action("Swap Garrison Troops")}
        onCrestClick={action("Crest Click")}
        onExitClick={action("Exit Click")}
      />
    );
  });
