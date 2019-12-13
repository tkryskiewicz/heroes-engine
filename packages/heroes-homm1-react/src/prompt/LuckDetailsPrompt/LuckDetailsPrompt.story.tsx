import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ArtifactId, LuckModifier, LuckModifierType, LuckType, ObjectId } from "heroes-homm1";

import { luckType } from "../../stories";
import { LuckDetailsPrompt } from "./LuckDetailsPrompt";

storiesOf("prompt|LuckDetailsPrompt", module)
  .add("default", () => (
    <LuckDetailsPrompt
      visible={boolean("Visible", true)}
      type={luckType("Type")}
      onConfirmClick={action("Confirm Click")}
    />
  ))
  .add("modifiers", () => {
    const modifiers: LuckModifier[] = [
      {
        artifact: ArtifactId.FourLeafClover,
        type: LuckModifierType.Artifact,
        value: 1,
      },
      {
        structure: ObjectId.Fountain,
        type: LuckModifierType.StructureVisited,
        value: 1,
      },
    ];

    return (
      <LuckDetailsPrompt
        visible={true}
        type={LuckType.Neutral}
        modifiers={modifiers}
      />
    );
  });
