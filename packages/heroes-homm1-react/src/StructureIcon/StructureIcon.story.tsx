import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { StructureId, TownId } from "heroes-homm1";

import { structureOptions, townOptions } from "../stories";
import { StructureIcon } from "./StructureIcon";

storiesOf("StructureIcon", module)
  .add("default", () => (
    <StructureIcon
      town={select("Town", townOptions, TownId.Farm)}
      structure={select("Structure", structureOptions, StructureId.Castle)}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ));
