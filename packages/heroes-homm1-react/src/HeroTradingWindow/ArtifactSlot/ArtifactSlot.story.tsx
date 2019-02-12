import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ArtifactLimit, HeroId } from "heroes-homm1";

import { artifact } from "../../stories";
import { ArtifactSlot } from "./ArtifactSlot";

storiesOf("HeroTradingWindow/ArtifactSlot", module)
  .add("default", () => (
    <ArtifactSlot
      hero={HeroId.LordKilburn}
      index={number("Index", 0, { range: true, min: 0, max: ArtifactLimit - 1, step: 1 })}
      artifact={artifact("Artifact")}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ))
  .add("empty", () => (
    <ArtifactSlot
      hero={HeroId.LordKilburn}
      index={number("Index", 0, { range: true, min: 0, max: ArtifactLimit - 1, step: 1 })}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ));
