import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EditorWindow } from "./EditorWindowContainer";

storiesOf("EditorWindowContainer", module)
  .add("default", () => (
    <EditorWindow
      onScroll={action("Scroll")}
    />
  ));
