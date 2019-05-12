import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EraseObjectsSettings } from "heroes-homm1";

import { EraseOptionSettingsWindow } from "./EraseOptionSettingsWindow";

const value: EraseObjectsSettings = {
  allOverlays: false,
  clearEntire: false,
  objectTypes: [],
};

storiesOf("editor/EraseOptionSettingsWindow", module)
  .add("default", () => (
    <EraseOptionSettingsWindow
      visible={boolean("Visible", true)}
      value={value}
      onValueChange={action("Value Change")}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
