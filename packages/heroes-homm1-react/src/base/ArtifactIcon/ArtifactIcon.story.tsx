import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { artifact } from "../../stories";
import { ArtifactIcon, ArtifactIconProps } from "./ArtifactIcon";

const sizeOptions: { readonly [s: string]: ArtifactIconProps["size"] } = {
  Large: "large",
  Small: "small",
};

storiesOf("base/ArtifactIcon", module)
  .add("default", () => (
    <ArtifactIcon
      size={select("Size", sizeOptions, "large")}
      artifact={artifact("Artifact")}
      onClick={action("Click")}
    />
  ));
