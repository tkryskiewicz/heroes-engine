import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EditorVerticalScroll } from "./EditorVerticalScroll";

storiesOf("editor/EditorVerticalScroll", module)
  .add("default", () => (
    <EditorVerticalScroll
      progress={number("Progress", 0, { range: true, min: 0, max: 1, step: 0.005 })}
      onScrollUpClick={action("Scroll Up Click")}
      onScrollDownClick={action("Scroll Down Click")}
    />
  ));
