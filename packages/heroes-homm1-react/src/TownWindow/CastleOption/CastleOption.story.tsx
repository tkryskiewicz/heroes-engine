import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CastleOptionStatus, StructureId, TownId } from "heroes-homm1";

import { castleOptionStatusOptions, structureOptions, townOptions } from "../../stories";
import { CastleOption } from "./CastleOption";

storiesOf("TownWindow/CastleOption", module)
  .add("default", () => (
    <CastleOption
      town={select("Town", townOptions, TownId.Farm)}
      option={select("Option", structureOptions, StructureId.Castle)}
      status={select("Status", castleOptionStatusOptions, CastleOptionStatus.Built)}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ));
