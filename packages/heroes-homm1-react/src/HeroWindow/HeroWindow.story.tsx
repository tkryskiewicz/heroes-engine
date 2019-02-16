import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { GameText } from "../core";
import { HeroWindow } from "./HeroWindow";

const renderHeroPortrait = () => <GameText size="normal">Hero Portrait</GameText>;
const renderSkill = (index: number) => <GameText size="normal">Skill {index}</GameText>;
const renderAdditionalStats = () => <GameText size="normal">Additional Stats</GameText>;
const renderCrest = () => <GameText size="normal">Crest</GameText>;
const renderTroop = (index: number) => <GameText size="normal">Troop {index}</GameText>;
const renderArtifact = (index: number) => <GameText size="normal">Artifact {index}</GameText>;

storiesOf("HeroWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <HeroWindow
      visible={boolean("Visible", true)}
      title={text("Title", "Title")}
      renderHeroPortrait={renderHeroPortrait}
      renderSkill={renderSkill}
      renderAdditionalStats={renderAdditionalStats}
      renderCrest={renderCrest}
      renderTroop={renderTroop}
      renderArtifact={renderArtifact}
      onExitMouseEnter={action("Exit Mouse Enter")}
      onExitMouseLeave={action("Exit Mouse Leave")}
      onExitClick={action("Exit Click")}
      statusText={text("Status Text", "Status Text")}
    />
  ))
  .add("dismissal", () => (
    <HeroWindow
      visible={true}
      dismissVisible={boolean("Dismiss Visible", true)}
      onDismissMouseEnter={action("Dismiss Mouse Enter")}
      onDismissMouseLeave={action("Dismiss Mouse Leave")}
      onDismissClick={action("Dismiss Hero Click")}
    />
  ));
