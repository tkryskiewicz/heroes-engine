import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Readme = require("./README.md");

import { Placeholder } from "../Placeholder";
import { HeroWindow } from "./HeroWindow";

const renderHeroPortrait = () => <Placeholder name="Hero Portrait" />;
const renderSkill = (index: number) => <Placeholder name={`Skill ${index}`} />;
const renderAdditionalStats = () => <Placeholder name="Additional Stats" />;
const renderCrest = () => <Placeholder name="Crest" />;
const renderTroop = (index: number) => <Placeholder name={`Troop ${index}`} />;
const renderArtifact = (index: number) => <Placeholder name={`Artifact ${index}`} />;

storiesOf("HeroWindow", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
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
