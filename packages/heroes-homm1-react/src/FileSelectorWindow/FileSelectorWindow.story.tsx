import { action } from "@storybook/addon-actions";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { scenarioDifficulty, scenarioSize } from "../stories";
import { FileSelectorType, FileSelectorWindow, FileSelectorWindowProps, ScenarioInfo } from "./FileSelectorWindow";

const typeOptions: FileSelectorType[] = [
  "save",
  "load",
];

const files: FileSelectorWindowProps["files"] = [
  "fileA",
  "fileB",
  "fileC",
  "fileD",
  "fileE",
  "fileF",
  "fileG",
  "fileH",
  "fileI",
  "fileJ",
];

const getScenarioInfo = (): ScenarioInfo => ({
  description: text("Scenario Description", "Description"),
  difficulty: scenarioDifficulty("Scenario Difficulty"),
  size: scenarioSize("Scenario Size"),
});

storiesOf("FileSelectorWindow", module)
  .add("default", () => (
    <FileSelectorWindow
      visible={boolean("Visible", true)}
      type={select("Type", typeOptions, "save")}
      files={files}
      onFileClick={action("File Click")}
      confirmDisabled={boolean("Confirm Disabled", false)}
      onOkayClick={action("Okay Click")}
      onCancelClick={action("Cancel Click")}
    />
  ))
  .add("selection", () => (
    <FileSelectorWindow
      visible={true}
      files={files}
      selectedFile={select("Selected File", files, files[0])}
    />
  ))
  .add("value", () => (
    <FileSelectorWindow
      visible={true}
      maxLength={number("Max Length", 10)}
      value={text("Value", "File Name")}
      onValueChange={action("Value Change")}
    />
  ))
  .add("scenario info", () => (
    <FileSelectorWindow
      visible={true}
      type="load"
      scenarioInfo={getScenarioInfo()}
    />
  ));
