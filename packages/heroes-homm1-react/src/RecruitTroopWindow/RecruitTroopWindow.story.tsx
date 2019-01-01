import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CreatureId, Resource } from "heroes-homm1";

import { creatureOptions } from "../stories";
import { RecruitTroopWindow } from "./RecruitTroopWindow";

storiesOf("RecruitTroopWindow", module)
  .add("default", () => (
    <RecruitTroopWindow
      resources={{ [Resource.Gold]: 3000 }}
      creature={select("Creature", creatureOptions, CreatureId.Peasant)}
      cost={{ [Resource.Gold]: 1000 }}
      availableCount={number("Available Count", 0, { range: true, min: 0, max: 99, step: 1 })}
      count={number("Count", 0, { range: true, min: 0, max: 99, step: 1 })}
      visible={boolean("Visible", true)}
      onCountChange={action("Count Change")}
      onOkayClick={action("Okay Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
