import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Hero, ItemData, TradableObjectData } from "heroes-core";
import { ArtifactId, ArtifactLimit, CreatureId, HeroClassId, HeroId } from "heroes-homm1";

import { HeroTradingWindow, HeroTradingWindowProps } from "./HeroTradingWindowContainer";

const defaultData: HeroTradingWindowProps["data"] = {
  objects: {},
};

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
      data={defaultData}
      hero={hero}
      otherHero={otherHero}
    />
  ))
  .add("artifacts", () => {
    const h: Hero = {
      ...hero,
      items: [
        {
          dataId: ArtifactId.ThunderMaceOfDominion,
          id: "artifactA",
        },
      ],
    };

    const oh: Hero = {
      ...otherHero,
      items: [
        {
          dataId: ArtifactId.GiantFlailOfDominion,
          id: "artifactB",
        },
      ],
    };

    const artifactSelection = boolean("Artifact Selected?", true) ? {
      hero: select("Hero", { Hero: h.id, OtherHero: oh.id }, h.id),
      index: number("Index", 0, { range: true, min: 0, max: ArtifactLimit - 1, step: 1 }),
    } : undefined;

    return (
      <HeroTradingWindow
        visible={true}
        data={defaultData}
        hero={h}
        otherHero={oh}
        selectedArtifact={artifactSelection}
        onSelectArtifactClick={action("Select Artifact Click")}
        onTradeArtifactsClick={action("Trade Artifacts Click")}
      />
    );
  })
  .add("non-tradable artifacts", () => {
    const nonTradableArtifact: ItemData & TradableObjectData = {
        id: ArtifactId.Spellbook,
        tradable: false,
    };

    const data: HeroTradingWindowProps["data"] = {
      objects: {
        [nonTradableArtifact.id]: nonTradableArtifact,
      },
    };

    const h: Hero = {
      ...hero,
      items: [
        {
          dataId: nonTradableArtifact.id,
          id: "id",
        },
      ],
    };

    return (
      <HeroTradingWindow
        visible={true}
        data={data}
        hero={h}
        otherHero={otherHero}
        artifactNotTradablePromptVisible={boolean("Artifact Not Tradable Prompt Visible", true)}
        onOpenArtifactNotTradablePrompt={action("Open Artifact Not Tradable Prompt")}
        onCloseArtifactNotTradablePrompt={action("Close Artifact Not Tradable Prompt")}
      />
    );
  });
