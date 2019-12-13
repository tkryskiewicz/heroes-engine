import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { direction } from "../../stories";
import { EditorScrollButton } from "./EditorScrollButton";

storiesOf("editor|EditorScrollButton", module)
  .add("default", () => (
    <EditorScrollButton
      direction={direction("direction")}
      onClick={action("Click")}
    />
  ));
