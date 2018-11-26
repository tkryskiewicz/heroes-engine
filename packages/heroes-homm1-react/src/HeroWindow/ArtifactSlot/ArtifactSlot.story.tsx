import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ArtifactId, ArtifactLimit } from "heroes-homm1";

import { artifactOptions } from "../../stories";
import { ArtifactSlot } from "./ArtifactSlot";

storiesOf(`HeroWindow/${ArtifactSlot.name}`, module)
  .add("default", () => (
    <ArtifactSlot
      index={number("Index", 0, { range: true, min: 0, max: ArtifactLimit - 1, step: 1 })}
      artifact={select("Artifact", artifactOptions, ArtifactId.GiantFlailOfDominion)}
      isUltimate={boolean("Is Ultimate", false)}
      onClick={action("Click")}
    />
  ))
  .add("empty", () => (
    <ArtifactSlot
      index={number("Index", 0, { range: true, min: 0, max: ArtifactLimit - 1, step: 1 })}
      isUltimate={boolean("Is Ultimate", false)}
      onClick={action("Click")}
    />
  ));
