import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Readme = require("./README.md");

import { Placeholder } from "../Placeholder";
import { TownWindow } from "./TownWindow";

const renderTownView = () => <Placeholder name="Town View" />;
const renderCrest = () => <Placeholder name="Crest" />;
const renderGarrisonTroop = (index: number) => <Placeholder name={`Garrison Troop ${index}`} />;
const renderHeroPortrait = () => <Placeholder name="Hero Portrait" />;
const renderHeroTroop = (index: number) => <Placeholder name={`Hero Troop ${index}`} />;
const renderTreasury = () => <Placeholder name="Treasury" />;

storiesOf("TownWindow", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
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
