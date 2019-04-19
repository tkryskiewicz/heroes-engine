import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EditorVerticalScroll } from "./EditorVerticalScroll";

storiesOf("editor/EditorVerticalScroll", module)
  .add("default", () => (
    <EditorVerticalScroll
      onScrollUpClick={action("Scroll Up Click")}
      onScrollDownClick={action("Scroll Down Click")}
    />
  ));
