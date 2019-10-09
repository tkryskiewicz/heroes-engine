import { storiesOf } from "@storybook/react";
import React from "react";

import { artifact, mapObjectSize } from "../../stories";
import { ArtifactMapObject } from "./ArtifactMapObject";

storiesOf("map|ArtifactMapObject", module)
  .add("default", () => (
    <ArtifactMapObject
      size={mapObjectSize("Size")}
      artifact={artifact("Artifact")}
    />
  ));
