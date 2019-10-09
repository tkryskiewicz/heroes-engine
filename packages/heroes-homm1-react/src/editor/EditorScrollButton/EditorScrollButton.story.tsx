import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { mapObjectOrientation } from "../../stories";
import { EditorScrollButton } from "./EditorScrollButton";

storiesOf("editor|EditorScrollButton", module)
  .add("default", () => (
    <EditorScrollButton
      direction={mapObjectOrientation("direction")}
      onClick={action("Click")}
    />
  ));
