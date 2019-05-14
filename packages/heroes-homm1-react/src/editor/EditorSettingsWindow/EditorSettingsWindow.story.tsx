import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EditorSettingsWindow } from "./EditorSettingsWindow";

storiesOf("editor/EditorSettingsWindow", module)
  .add("default", () => (
    <EditorSettingsWindow
      visible={boolean("Visible", true)}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    >
      CONTENT
    </EditorSettingsWindow>
  ));
