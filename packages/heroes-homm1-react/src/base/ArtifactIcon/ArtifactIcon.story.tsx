import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ArtifactId } from "heroes-homm1";

import { artifactOptions } from "../../stories";
import { ArtifactIcon, ArtifactIconProps } from "./ArtifactIcon";

const sizeOptions: { [s: string]: ArtifactIconProps["size"] } = {
  Large: "large",
  Small: "small",
};

storiesOf(`base/${ArtifactIcon.name}`, module)
  .add("default", () => (
    <ArtifactIcon
      size={select("Size", sizeOptions, "large")}
      artifact={select("Artifact", artifactOptions, ArtifactId.ThunderMaceOfDominion)}
      onClick={action("Click")}
    />
  ));
