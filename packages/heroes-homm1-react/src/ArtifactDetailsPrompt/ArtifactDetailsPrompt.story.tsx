import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ArtifactId } from "heroes-homm1";

import { artifactOptions } from "../stories";
import { ArtifactDetailsPrompt } from "./ArtifactDetailsPrompt";

storiesOf("ArtifactDetailsPrompt", module)
  .add("default", () => (
    <ArtifactDetailsPrompt
      visible={boolean("Visible", true)}
      artifact={select("Artifact", artifactOptions, ArtifactId.ThunderMaceOfDominion)}
      onConfirmClick={action("Confirm Click")}
    />
  ));
