import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { TroopSelectionType } from "heroes-core";

import { creature } from "../../stories";
import { RedistributeArmyPrompt } from "./RedistributeArmyPrompt";

const armyTypeOptions = {
  Garrison: TroopSelectionType.Garrison,
  Hero: TroopSelectionType.Hero,
};

storiesOf("prompt|RedistributeArmyPrompt", module)
  .add("default", () => (
    <RedistributeArmyPrompt
      visible={boolean("Visible", true)}
      creature={creature("Creature")}
      armyType={select("Army Type", armyTypeOptions, TroopSelectionType.Hero)}
      targetArmyType={select("Target Army Type", armyTypeOptions, TroopSelectionType.Hero)}
      max={number("Max", 10, { range: true, min: 0, max: 9999, step: 1 })}
      count={number("Count", 0, { range: true, min: 0, max: 9999, step: 1 })}
      onCountChange={action("Count Change")}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
