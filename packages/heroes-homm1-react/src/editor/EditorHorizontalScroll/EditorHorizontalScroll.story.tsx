import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EditorHorizontalScroll } from "./EditorHorizontalScroll";

storiesOf("editor/EditorHorizontalScroll", module)
  .add("default", () => (
    <EditorHorizontalScroll
      onScrollLeftClick={action("Scroll Left Click")}
      onScrollRightClick={action("Scroll Right Click")}
    />
  ));
