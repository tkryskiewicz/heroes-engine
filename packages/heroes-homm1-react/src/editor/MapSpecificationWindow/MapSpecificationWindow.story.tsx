import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { scenarioDifficulty, scenarioSize } from "../../stories";
import { MapSpecificationWindow } from "./MapSpecificationWindow";

storiesOf("editor/MapSpecificationWindow", module)
  .add("default", () => (
    <MapSpecificationWindow
      visible={boolean("Visible", true)}
      selectedDifficulty={scenarioDifficulty("Selected Difficulty")}
      onDifficultyChange={action("Difficulty Change")}
      selectedSize={scenarioSize("Selected Size")}
      onSizeChange={action("Size Change")}
      name={text("Name", "Name")}
      onNameChange={action("Name Change")}
      description={text("Description", "Description")}
      onDescriptionChange={action("Description Change")}
      filePrefix={text("File Prefix", "Prefix")}
      onFilePrefixChange={action("File Prefix Change")}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
