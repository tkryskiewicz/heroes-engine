import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EditorButtons } from "./EditorButtons";

storiesOf("editor/EditorButtons", module)
  .add("default", () => (
    <EditorButtons
      onZoomClick={action("Zoom Click")}
      onUndoClick={action("Undo Click")}
      onSpecsClick={action("Specs Click")}
      onRandomClick={action("Random Click")}
      onNewClick={action("New Click")}
      onLoadClick={action("Load Click")}
      onSaveClick={action("Save Click")}
      onQuitClick={action("Quit Click")}
    />
  ));
