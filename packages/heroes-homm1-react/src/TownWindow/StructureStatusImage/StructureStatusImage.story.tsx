import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { StructureId, StructureStatus, TownId } from "heroes-homm1";

import { structureOptions, structureStatusOptions, townOptions } from "../../stories";
import { StructureStatusImage } from "./StructureStatusImage";

storiesOf(`TownWindow/${StructureStatusImage.name}`, module)
  .add("default", () => (
    <StructureStatusImage
      town={select("Town", townOptions, TownId.Farm)}
      structure={select("Structure", structureOptions, StructureId.Castle)}
      status={select("Status", structureStatusOptions, StructureStatus.Built)}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ));
