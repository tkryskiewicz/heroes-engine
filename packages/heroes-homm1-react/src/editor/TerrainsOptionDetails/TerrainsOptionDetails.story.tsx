import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { TerrainType } from "heroes-homm1";

import { terrainType } from "../../stories";
import { TerrainsOptionDetails } from "./TerrainsOptionDetails";

storiesOf("editor/TerrainsOptionDetails", module)
  .add("default", () => (
    <TerrainsOptionDetails
      options={Object.values(TerrainType).map(String)}
      selectedOption={terrainType("Selected Option")}
      onSelectedOptionChange={action("Selected Option Change")}
    />
  ));
