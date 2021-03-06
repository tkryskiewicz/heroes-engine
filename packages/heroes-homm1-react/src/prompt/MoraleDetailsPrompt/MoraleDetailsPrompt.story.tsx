import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import {
  ArtifactId,
  HeroClassId,
  MoraleModifier,
  MoraleModifierType,
  MoraleType,
  ObjectId,
  TownId,
} from "heroes-homm1";

import { moraleType } from "../../stories";
import { MoraleDetailsPrompt } from "./MoraleDetailsPrompt";

storiesOf("prompt|MoraleDetailsPrompt", module)
  .add("default", () => (
    <MoraleDetailsPrompt
      visible={boolean("Visible", true)}
      type={moraleType("Value")}
      onConfirmClick={action("Confirm Click")}
    />
  ))
  .add("modifiers", () => {
    const modifiers: MoraleModifier[] = [
      {
        heroClass: HeroClassId.Knight,
        type: MoraleModifierType.HeroClass,
        value: 1,
      },
      {
        town: TownId.Farm,
        type: MoraleModifierType.SameOriginTroops,
        value: 1,
      },
      {
        count: 3,
        type: MoraleModifierType.DifferentOriginTroops,
        value: 1,
      },
      {
        artifact: ArtifactId.MedalOfCourage,
        type: MoraleModifierType.Artifact,
        value: 1,
      },
      {
        structure: ObjectId.Oasis,
        type: MoraleModifierType.StructureVisited,
        value: 1,
      },
      {
        structure: ObjectId.Graveyard,
        type: MoraleModifierType.StructureRobber,
        value: -1,
      },
      {
        type: MoraleModifierType.BattleCowardice,
        value: -2,
      },
    ];

    return (
      <MoraleDetailsPrompt
        visible={true}
        type={MoraleType.Neutral}
        modifiers={modifiers}
      />
    );
  });
