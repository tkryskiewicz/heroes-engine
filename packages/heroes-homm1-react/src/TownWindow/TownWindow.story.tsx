import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { GameText } from "../core";
import { TownWindow } from "./TownWindow";

const renderTownView = () => <GameText size="small">Town View</GameText>;
const renderCrest = () => <GameText size="small">Crest</GameText>;
const renderGarrisonTroop = (index: number) => <GameText size="small">Garrison Troop {index}</GameText>;
const renderHeroPortrait = () => <GameText size="small">Hero Portrait</GameText>;
const renderHeroTroop = (index: number) => <GameText size="small">Hero Troop {index}</GameText>;
const renderTreasury = () => <GameText size="small">Treasury</GameText>;

storiesOf("TownWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <TownWindow
      visible={boolean("Visible", true)}
      townName={text("Town Name", "Town Name")}
      renderTownView={renderTownView}
      renderCrest={renderCrest}
      renderGarrisonTroop={renderGarrisonTroop}
      renderHeroPortrait={renderHeroPortrait}
      renderHeroTroop={renderHeroTroop}
      renderTreasury={renderTreasury}
      statusText={text("Status Text", "Status Text")}
    />
  ));
