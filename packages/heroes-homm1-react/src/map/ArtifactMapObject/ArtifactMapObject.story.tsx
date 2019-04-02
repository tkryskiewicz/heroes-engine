import { storiesOf } from "@storybook/react";
import * as React from "react";

import { artifact } from "../../stories";
import { ArtifactMapObject } from "./ArtifactMapObject";

storiesOf("map/ArtifactMapObject", module)
  .add("default", () => (
    <ArtifactMapObject
      artifact={artifact("Artifact")}
    />
  ));
