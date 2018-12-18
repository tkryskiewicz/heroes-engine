import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Resource, StructureId, TownId } from "heroes-homm1";

import { structureOptions, townOptions } from "../stories";
import { BuildStructureWindow } from "./BuildStructureWindow";

storiesOf(BuildStructureWindow.name, module)
  .add("default", () => (
    <BuildStructureWindow
      town={select("Town", townOptions, TownId.Farm)}
      structure={select("Structure", structureOptions, StructureId.Castle)}
      cost={{ [Resource.Gold]: 2000, [Resource.Ore]: 20 }}
      canBuild={boolean("Can Build", true)}
      visible={boolean("Visible", true)}
      onOkayClick={action("Okay Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
