import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { movementSpeed, soundVolume } from "../stories";
import { GameOptions } from "./GameOptions";

storiesOf("GameOptions", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <GameOptions
      visible={boolean("Visible", true)}
      onNewGameClick={action("New Game Click")}
      onLoadGameClick={action("Load Game Click")}
      onSaveGameClick={action("Save Game Click")}
      onQuitClick={action("Quit Click")}
      musicVolume={soundVolume("Music Volume")}
      onMusicVolumeChange={action("Music Volume Change")}
      effectsVolume={soundVolume("Effects Volume")}
      onEffectsVolumeChange={action("Effects Volume Change")}
      movementSpeed={movementSpeed("Movement Speed")}
      onMovementSpeedChange={action("Movement Speed Change")}
      autoSave={boolean("Auto Save", true)}
      onAutoSaveChange={action("Auto Save Change")}
      showPath={boolean("Show Path", true)}
      onShowPathChange={action("Show Path Change")}
      viewEnemyMovement={boolean("View Enemy Movement", true)}
      onViewEnemyMovementChange={action("View Enemy Movement Change")}
      onOkayClick={action("Okay Click")}
      onInfoClick={action("Info Click")}
    />
  ));
