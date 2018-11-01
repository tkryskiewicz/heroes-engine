import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Resource, StructureId, TownId } from "heroes-homm1";

import { structureOptions, townOptions } from "../stories";
import { BuildStructureWindow } from "./BuildStructureWindow";

storiesOf(BuildStructureWindow.name, module)
  .add("default", () => (
    <BuildStructureWindow
      town={select("Town", townOptions, TownId.Farm)}
      structure={select("Structure", structureOptions, StructureId.Tent)}
      cost={{ [Resource.Gold]: 2000, [Resource.Ore]: 20 }}
      onOkayClick={action("Okay Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));