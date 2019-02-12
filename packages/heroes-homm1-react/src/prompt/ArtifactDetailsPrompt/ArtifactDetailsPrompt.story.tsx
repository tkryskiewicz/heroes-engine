import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { artifact } from "../../stories";
import { ArtifactDetailsPrompt } from "./ArtifactDetailsPrompt";

storiesOf("prompt/ArtifactDetailsPrompt", module)
  .add("default", () => (
    <ArtifactDetailsPrompt
      visible={boolean("Visible", true)}
      artifact={artifact("Artifact")}
      onConfirmClick={action("Confirm Click")}
    />
  ));
