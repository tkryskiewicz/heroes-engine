import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { HeroId } from "heroes-homm1";

import Readme = require("./README.md");

import { Placeholder } from "../Placeholder";
import { HeroTradingWindow, HeroTradingWindowProps } from "./HeroTradingWindow";

const h: HeroTradingWindowProps["hero"] = {
  id: HeroId.LordKilburn,
  skills: {},
};

const oh: HeroTradingWindowProps["otherHero"] = {
  id: HeroId.Antoine,
  skills: {},
};

const renderHeroPortrait = (hero: string) => <Placeholder name={`${hero} Hero Portrait`} />;
const renderTroop = (_hero: string, index: number) => <Placeholder name={`T${index}`} />;
const renderArtifact = (_hero: string, index: number) => <Placeholder name={`A${index}`} />;

storiesOf("HeroTradingWindow", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => (
    <HeroTradingWindow
      visible={boolean("Visible", true)}
      title={text("Title", "Title")}
      hero={h}
      otherHero={oh}
      renderHeroPortrait={renderHeroPortrait}
      renderTroop={renderTroop}
      renderArtifact={renderArtifact}
      onExitClick={action("Exit Click")}
    />
  ));
