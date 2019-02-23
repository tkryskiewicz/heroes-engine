import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Troop } from "heroes-core";
import { creatureById, CreatureId, LuckType, MoraleType, Skill } from "heroes-homm1";

import { Placeholder } from "../Placeholder";
import { creature, luckType, moraleType, troopIndex } from "../stories";
import { TroopWindow } from "./TroopWindow";

const troopBase: Troop = {
  count: 1,
  creature: CreatureId.Peasant,
};

const renderCreature = () => <Placeholder name="Creature" />;

storiesOf("TroopWindow", module)
  .add("default", () => (
    <TroopWindow
      index={troopIndex("Index")}
      creature={creatureById[creature("Creature")]}
      morale={moraleType("Morale")}
      luck={luckType("Luck")}
      count={number("Count", 1, { range: true, min: 0, max: 9999, step: 1 })}
      renderCreature={renderCreature}
      visible={boolean("Visible", true)}
      onExitClick={action("Exit Click")}
    />
  ))
  .add("skill enhancements", () => (
    <TroopWindow
      visible={true}
      index={0}
      creature={creatureById[creature("Creature")]}
      morale={MoraleType.Neutral}
      luck={LuckType.Neutral}
      skillEnhancements={{ [Skill.Attack]: 1, [Skill.Defense]: 2 }}
      count={1}
    />
  ))
  .add("dismissal", () => (
    <TroopWindow
      index={troopIndex("Index")}
      creature={creatureById[troopBase.creature]}
      morale={MoraleType.Neutral}
      luck={LuckType.Neutral}
      count={troopBase.count}
      dismissible={boolean("Dismissible", true)}
      visible={true}
      dismissPromptVisible={boolean("Dismiss Prompt Visible", false)}
      onDismissClick={action("Dismiss Click")}
      onCancelDismissClick={action("Cancel Dismiss Click")}
      onConfirmDismissClick={action("Confirm Dismiss Click")}
    />
  ));
