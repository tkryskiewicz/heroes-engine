import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Troop } from "heroes-core";
import { CreatureId, creatures, LuckType, MoraleType } from "heroes-homm1";

import { Placeholder } from "../Placeholder";
import { creature, luckType, moraleType, skills, troopIndex } from "../stories";
import { TroopWindow } from "./TroopWindow";

const troopBase: Troop = {
  count: 1,
  creature: CreatureId.Peasant,
};

const renderCreature = () => <Placeholder name="Creature" />;

storiesOf("TroopWindow", module)
  .add("default", () => (
    <TroopWindow
      visible={boolean("Visible", true)}
      index={troopIndex("Index")}
      creature={creatures.find((c) => c.id === creature("Creature"))!}
      morale={moraleType("Morale")}
      luck={luckType("Luck")}
      count={number("Count", 1, { range: true, min: 0, max: 9999, step: 1 })}
      renderCreature={renderCreature}
      onExitClick={action("Exit Click")}
    />
  ))
  .add("skill enhancements", () => (
    <TroopWindow
      visible={true}
      index={0}
      creature={creatures.find((c) => c.id === creature("Creature"))!}
      morale={MoraleType.Neutral}
      luck={LuckType.Neutral}
      skillEnhancements={skills("Skill Enhancements")}
      count={1}
    />
  ))
  .add("dismissal", () => (
    <TroopWindow
      visible={true}
      index={troopIndex("Index")}
      creature={creatures.find((c) => c.id === creature("Creature"))!}
      morale={MoraleType.Neutral}
      luck={LuckType.Neutral}
      count={troopBase.count}
      dismissVisible={boolean("Dismiss Visible", true)}
      onDismissClick={action("Dismiss Click")}
    />
  ));
