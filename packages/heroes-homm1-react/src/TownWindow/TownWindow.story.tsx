import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { Town } from "heroes-core";

import Readme = require("./README.md");

import { GameText } from "../core";
import { alignment, heroClass, town } from "../stories";
import { TownWindow } from "./TownWindow";

const renderCrest = () => <GameText size="small">Crest</GameText>;
const renderGarrisonTroop = (index: number) => <GameText size="small">Garrison Troop {index}</GameText>;
const renderHeroPortrait = () => <GameText size="small">Hero Portrait</GameText>;
const renderHeroTroop = (index: number) => <GameText size="small">Hero Troop {index}</GameText>;
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

    return (
      <TownWindow
        town={t}
        resources={{}}
        visible={boolean("Visible", true)}
        renderCrest={renderCrest}
        renderGarrisonTroop={renderGarrisonTroop}
        renderHeroPortrait={renderHeroPortrait}
        renderHeroTroop={renderHeroTroop}
        renderTreasury={renderTreasury}
        onExitClick={action("Exit Click")}
        statusText={text("Status Text", "Status Text")}
      />
    );
  });
