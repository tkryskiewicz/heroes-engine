import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Hero, TradableObjectData } from "heroes-core";
import { ArtifactData, ArtifactId, ArtifactLimit, constructArtifact, CreatureId, HeroClassId, HeroId } from "heroes-homm1";

import { HeroTradingWindow, HeroTradingWindowProps } from "./HeroTradingWindowContainer";

const hero: Hero = {
  army: [
    {
      count: 1,
      creature: CreatureId.Peasant,
    },
  ],
  experience: 0,
  heroClass: HeroClassId.Knight,
  heroId: HeroId.LordKilburn,
  id: "hero",
  items: [],
  luck: 0,
  mobility: 0,
  morale: 0,
  skills: {},
};

const otherHero: Hero = {
  army: [],
  experience: 0,
  heroClass: HeroClassId.Knight,
  heroId: HeroId.Antoine,
  id: "otherHero",
  items: [],
  luck: 0,
  mobility: 0,
  morale: 0,
  skills: {},
};

storiesOf("HeroTradingWindowContainer", module)
  .add("default", () => (
    <HeroTradingWindow
      visible={true}
      artifacts={{}}
      hero={hero}
      otherHero={otherHero}
    />
  ))
  .add("artifacts", () => {
    const h: Hero = {
      ...hero,
      items: [
        constructArtifact(ArtifactId.ThunderMaceOfDominion),
      ],
    };

    const oh: Hero = {
      ...otherHero,
      items: [
        constructArtifact(ArtifactId.GiantFlailOfDominion),
      ],
    };

    const artifactSelection = boolean("Artifact Selected?", true) ? {
      hero: select("Hero", { Hero: h.id, OtherHero: oh.id }, h.id),
      index: number("Index", 0, { range: true, min: 0, max: ArtifactLimit - 1, step: 1 }),
    } : undefined;

    return (
      <HeroTradingWindow
        visible={true}
        artifacts={{}}
        hero={h}
        otherHero={oh}
        selectedArtifact={artifactSelection}
        onSelectArtifactClick={action("Select Artifact Click")}
        onTradeArtifactsClick={action("Trade Artifacts Click")}
      />
    );
  })
  .add("non-tradable artifacts", () => {
    const nonTradableArtifact: ArtifactData & TradableObjectData = {
        id: ArtifactId.Spellbook,
        isUltimate: false,
        tradable: false,
    };

    const artifacts: HeroTradingWindowProps["artifacts"] = {
      [nonTradableArtifact.id]: nonTradableArtifact,
    };

    const h: Hero = {
      ...hero,
      items: [
        constructArtifact(ArtifactId.Spellbook, {}),
      ],
    };

    return (
      <HeroTradingWindow
        visible={true}
        artifacts={artifacts}
        hero={h}
        otherHero={otherHero}
        artifactNotTradablePromptVisible={boolean("Artifact Not Tradable Prompt Visible", true)}
        onOpenArtifactNotTradablePrompt={action("Open Artifact Not Tradable Prompt")}
        onCloseArtifactNotTradablePrompt={action("Close Artifact Not Tradable Prompt")}
      />
    );
  });
