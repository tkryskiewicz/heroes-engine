import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ResourceId } from "heroes-homm1";

import { structure, town } from "../stories";
import { BuildStructureWindow } from "./BuildStructureWindow";

storiesOf("BuildStructureWindow", module)
  .add("default", () => (
    <BuildStructureWindow
      town={town("Town")}
      structure={structure("Structure")}
      cost={{ [ResourceId.Gold]: 2000, [ResourceId.Ore]: 20 }}
      canBuild={boolean("Can Build", true)}
      visible={boolean("Visible", true)}
      onOkayClick={action("Okay Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
