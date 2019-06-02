import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { LandMassSetting, RandomMapSettings, terrains } from "heroes-homm1";

import { RandomMapSettingsWindow, RandomMapSettingsWindowProps } from "./RandomMapSettingsWindow";

const data: RandomMapSettingsWindowProps["data"] = {
  terrains: terrains.map((t) => t.id),
};

const value: RandomMapSettings = {
  landMass: LandMassSetting.Scattered,
  mines: 0,
  monsters: 0,
  mountains: 0,
  saveWithoutViewing: false,
  terrainAmount: {},
  treasures: 0,
  trees: 0,
};

storiesOf("editor/RandomMapSettingsWindow", module)
  .add("default", () => (
    <RandomMapSettingsWindow
      visible={boolean("Visible", true)}
      data={data}
      value={value}
      onValueChange={action("Value Change")}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
