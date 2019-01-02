import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { StructureId, TownId } from "heroes-homm1";

import { structureOptions, townOptions } from "../../stories";
import { StructureView } from "./StructureView";

storiesOf(`TownView/${StructureView.name}`, module)
  .add("default", () => (
    <StructureView
      town={select("Town", townOptions, TownId.Farm)}
      structure={select("Structure", structureOptions, StructureId.Castle)}
      placeholder={boolean("Placeholder", false)}
      onClick={action("Click")}
    />
  ));
