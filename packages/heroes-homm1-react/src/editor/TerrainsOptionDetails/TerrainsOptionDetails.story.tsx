import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { TerrainId } from "heroes-homm1";

import { terrain } from "../../stories";
import { TerrainsOptionDetails } from "./TerrainsOptionDetails";

storiesOf("editor|TerrainsOptionDetails", module)
  .add("default", () => (
    <TerrainsOptionDetails
      options={Object.values(TerrainId)}
      selectedOption={terrain("Selected Option")}
      onSelectedOptionChange={action("Selected Option Change")}
    />
  ));
