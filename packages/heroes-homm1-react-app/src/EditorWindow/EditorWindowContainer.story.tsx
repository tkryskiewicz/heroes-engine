import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EditorWindow } from "./EditorWindowContainer";

storiesOf("EditorWindowContainer", module)
  .add("default", () => (
    <EditorWindow
      onScroll={action("Scroll")}
      zoomed={boolean("Zoomed", false)}
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
