import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { Hero } from "heroes-core";
import { Alignment, ArtifactId, ArtifactLimit, constructArtifact, CreatureId, HeroClass, HeroId } from "heroes-homm1";

import Readme = require("./README.md");

import { HeroTradingWindow } from "./HeroTradingWindow";

const hero: Hero = {
  alignment: Alignment.Red,
  army: [
    {
      count: 1,
      creature: CreatureId.Peasant,
    },
  ],
  artifacts: [],
  experience: 0,
  heroClass: HeroClass.Knight,
  id: HeroId.LordKilburn,
  luck: 0,
  mobility: 0,
  morale: 0,
  skills: {},
};

const otherHero: Hero = {
  alignment: Alignment.Red,
  army: [],
  artifacts: [],
  experience: 0,
  heroClass: HeroClass.Knight,
  id: HeroId.Antoine,
  luck: 0,
  mobility: 0,
  morale: 0,
  skills: {},
};

storiesOf("HeroTradingWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <HeroTradingWindow
      visible={boolean("Visible", true)}
      hero={hero}
      otherHero={otherHero}
      onHeroPortraitClick={action("Hero Portrait Click")}
      onExitClick={action("Exit Click")}
    />
  ))
  .add("artifacts", () => {
    const h: Hero = {
      ...hero,
      artifacts: [
        constructArtifact(ArtifactId.ThunderMaceOfDominion),
      ],
    };

    const oh: Hero = {
      ...otherHero,
      artifacts: [
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
        hero={h}
        otherHero={oh}
        selectedArtifact={artifactSelection}
        onSelectedArtifactChange={action("Selected Artifact Change")}
        onTradeArtifacts={action("Trade Artifacts")}
      />
    );
  })
  .add("non-tradable artifacts", () => {
    const h: Hero = {
      ...hero,
      artifacts: [
        constructArtifact(ArtifactId.Spellbook),
      ],
    };

    return (
      <HeroTradingWindow
        visible={true}
        hero={h}
        otherHero={otherHero}
        artifactNotTradablePromptVisible={boolean("Artifact Not Tradable Prompt Visible", true)}
        onArtifactNotTradablePromptVisibleChange={action("Artifact Not Tradable Prompt Visible Change")}
      />
    );
  });
