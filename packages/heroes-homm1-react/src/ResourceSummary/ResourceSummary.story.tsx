import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ResourceId } from "heroes-homm1";

import { ResourceSummary } from "./ResourceSummary";

storiesOf("ResourceSummary", module)
  .add("default", () => (
    <ResourceSummary
      castleCount={number("Castle Count", 0, { range: true, min: 0, max: 8, step: 1 })}
      townCount={number("Town Count", 0, { range: true, min: 0, max: 8, step: 1 })}
      resources={{ [ResourceId.Gold]: 1000, [ResourceId.Gems]: 4 }}
    />
  ));
