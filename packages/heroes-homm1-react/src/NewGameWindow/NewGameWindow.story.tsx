import { action } from "@storybook/addon-actions";
import { boolean, number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Placeholder } from "../Placeholder";
import { alignment } from "../stories";
import { NewGameWindow } from "./NewGameWindow";

const renderGameDifficulty = (i: number) => <Placeholder name={`Game Difficulty ${i}`} />;
const renderOpponentSetting = (i: number) => <Placeholder name={`Opponent ${i}`} />;

storiesOf("NewGameWindow", module)
  .add("default", () => (
    <NewGameWindow
      renderGameDifficulty={renderGameDifficulty}
      renderOpponentSetting={renderOpponentSetting}
      playerColor={alignment("Player Color")}
      onPlayerColorClick={action("Player Color Click")}
      kingOfTheHill={boolean("King of the Hill", false)}
      onKingOfTheHillChange={action("King of the Hill Change")}
      scenarioName={text("Scenario Name", "Scenario")}
      onSelectScenarioClick={action("Select Scenario Click")}
      difficultyRating={number("Difficulty Rating", 75)}
      onOkayClick={action("Okay Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
