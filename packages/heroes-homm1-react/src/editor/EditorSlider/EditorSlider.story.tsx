import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EditorSlider } from "./EditorSlider";

storiesOf("editor|EditorSlider", module)
  .add("default", () => (
    <EditorSlider
      value={number("Value", 0, { range: true, min: 0, max: 1, step: 0.01 })}
      onValueChange={action("Value Change")}
    />
  ));
