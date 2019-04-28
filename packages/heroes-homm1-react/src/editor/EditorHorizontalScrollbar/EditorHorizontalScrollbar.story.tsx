import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EditorHorizontalScrollbar } from "./EditorHorizontalScrollbar";

storiesOf("editor/EditorHorizontalScrollbar", module)
  .add("default", () => (
    <EditorHorizontalScrollbar
      progress={number("Progress", 0, { range: true, min: 0, max: 1, step: 0.005 })}
      onScrollLeftClick={action("Scroll Left Click")}
      onScrollRightClick={action("Scroll Right Click")}
    />
  ));
