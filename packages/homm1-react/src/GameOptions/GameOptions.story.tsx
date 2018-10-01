import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { MovementSpeed, SoundVolume } from "heroes-homm1";

import { movementSpeedOptions } from "../stories";
import { GameOptions } from "./GameOptions";

storiesOf(GameOptions.name, module)
  .add("default", () => {
    const musicVolume = number("Music Volume", SoundVolume.On, {
      max: SoundVolume.On,
      min: SoundVolume.Off,
      range: true,
      step: 1,
    });

    const effectsVolume = number("Effects Volume", SoundVolume.On, {
      max: SoundVolume.On,
      min: SoundVolume.Off,
      range: true,
      step: 1,
    });

    return (
      <GameOptions
        onNewGameClick={action("New Game Click")}
        onLoadGameClick={action("Load Game Click")}
        onSaveGameClick={action("Save Game Click")}
        onQuitClick={action("Quit Click")}
        musicVolume={musicVolume}
        onMusicVolumeChange={action("Music Volume Change")}
        effectsVolume={effectsVolume}
        onEffectsVolumeChange={action("Effects Volume Change")}
        movementSpeed={select("Movement Speed", movementSpeedOptions, MovementSpeed.Walk)}
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
    );
  });
