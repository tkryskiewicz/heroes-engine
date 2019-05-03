import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { artifact } from "../../stories";
import { ArtifactMapObject, ArtifactMapObjectProps } from "./ArtifactMapObject";

const sizeOptions: { readonly [s: string]: ArtifactMapObjectProps["size"] } = {
  Large: "large",
  Small: "small",
};

storiesOf("map/ArtifactMapObject", module)
  .add("default", () => (
    <ArtifactMapObject
      size={select("Size", sizeOptions, "large")}
      artifact={artifact("Artifact")}
    />
  ));
