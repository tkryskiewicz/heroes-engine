import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { ArtifactLimit } from "heroes-homm1";

import Readme = require("./README.md");

import { artifact } from "../../stories";
import { ArtifactSlot } from "./ArtifactSlot";

storiesOf("base/ArtifactSlot", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <ArtifactSlot
      index={number("Index", 0, { range: true, min: 0, max: ArtifactLimit - 1, step: 1 })}
      artifact={artifact("Artifact")}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ))
  .add("empty", () => (
    <ArtifactSlot
      index={number("Index", 0, { range: true, min: 0, max: ArtifactLimit - 1, step: 1 })}
      isUltimate={boolean("Is Ultimate", false)}
      onClick={action("Click")}
    />
  ))
  .add("ultimate", () => (
    <ArtifactSlot
      index={0}
      artifact={artifact("Artifact")}
      isUltimate={boolean("Is Ultimate", true)}
    />
  ));
