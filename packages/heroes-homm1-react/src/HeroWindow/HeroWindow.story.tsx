import { action } from "@storybook/addon-actions";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Hero } from "heroes-core";
import { Alignment, ArmySize, ArtifactId, ArtifactLimit, CreatureId, HeroClass, HeroId, Skill } from "heroes-homm1";

import { alignmentOptions, artifactOptions, heroClassOptions, heroOptions, skillOptions } from "../stories";
import { HeroWindow } from "./HeroWindow";
import { MiscInfoType } from "./MiscInfo";

// TODO: move or remove???
export const miscInfoOptions: { [s: string]: MiscInfoType | "" } = {
  Experience: MiscInfoType.Experience,
  Luck: MiscInfoType.Luck,
  Morale: MiscInfoType.Morale,
  None: "",
};

const heroBase: Hero = {
  alignment: Alignment.Red,
  army: [
    {
      count: 1,
      creature: CreatureId.Peasant,
    },
    undefined,
    {
      count: 1,
      creature: CreatureId.Archer,
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

storiesOf("HeroWindow", module)
  .add("default", () => {
    const hero: Hero = {
      ...heroBase,
      alignment: select("Alignment", alignmentOptions, Alignment.Red),
      heroClass: select("Hero Class", heroClassOptions, HeroClass.Knight),
      id: select("Hero", heroOptions, HeroId.LordKilburn),
    };

    return (
      <HeroWindow
        hero={hero}
        visible={boolean("Visible", true)}
        onCrestClick={action("Crest Click")}
        onExitClick={action("Exit Click")}
      />
    );
  })
  .add("skills", () => {
    const hero: Hero = {
      ...heroBase,
      skills: {
        [Skill.AttackSkill]: number("Attack Skill", 0, { range: true, min: 0, max: 999, step: 1 }),
        [Skill.DefenseSkill]: number("Defense Skill", 0, { range: true, min: 0, max: 999, step: 1 }),
        [Skill.SpellPower]: number("Spell Power", 0, { range: true, min: 0, max: 999, step: 1 }),
        [Skill.Knowledge]: number("Knowledge", 0, { range: true, min: 0, max: 999, step: 1 }),
      },
    };

    return (
      <HeroWindow
        hero={hero}
        visible={true}
        visibleSkillDetails={select("Visible Skill Details", { None: "", ...skillOptions }, "")}
        onVisibleSkillDetailsChange={action("Visible Skill Details Change")}
      />
    );
  })
  .add("additional characteristics", () => {
    const hero: Hero = {
      ...heroBase,
      experience: number("Experience", 0, { range: true, min: 0, max: 999999, step: 1 }),
      luck: number("Luck", 0, { range: true, min: -3, max: 3, step: 1 }),
      morale: number("Morale", 0, { range: true, min: -3, max: 3, step: 1 }),
    };

    return (
      <HeroWindow
        hero={hero}
        visible={true}
        visibleMiscInfoDetails={select("Visible Misc Info Details", { None: "", ...miscInfoOptions }, "")}
        onVisibleMiscInfoDetailsChange={action("Visible Misc Info Details Change")}
      />
    );
  })
  .add("army", () => {
    const troopSelected = boolean("Troop Selected", false);

    const troopIndex = troopSelected ?
      number("Selected Troop Index", 0, { range: true, min: 0, max: ArmySize - 1, step: 1 }) :
      undefined;

    return (
      <HeroWindow
        hero={heroBase}
        visible={true}
        selectedTroopIndex={troopIndex}
        onSelectTroop={action("Select Troop")}
        onSelectedTroopClick={action("Selected Troop Click")}
        onSwapTroops={action("Swap Troops")}
      />
    );
  })
  .add("troop details", () => (
    <HeroWindow
      hero={heroBase}
      visible={true}
      selectedTroopIndex={number("Selected Troop Index", 0, { range: true, min: 0, max: ArmySize - 1, step: 1 })}
      troopDetailsVisible={boolean("Troop Details Visible", false)}
      onExitTroopDetails={action("Exit Troop Details")}
      onDismissTroopClick={action("Dismiss Troop Click")}
      dismissTroopPromptVisible={boolean("Dismiss Troop Prompt Visible", false)}
      onCancelDismissTroopClick={action("Cancel Dismiss Troop Click")}
      onConfirmDismissTroopClick={action("Confirm Dismiss Troop Click")}
    />
  ))
  .add("artifacts", () => {
    const hero: Hero = {
      ...heroBase,
      artifacts: [
        select("Artifact", artifactOptions, ArtifactId.ThunderMaceOfDominion),
      ],
    };

    const visibleArtifactDescription = boolean("Show Artifact Description", false) ?
      number("Visible Artifact Description", 0, { range: true, min: 0, max: ArtifactLimit - 1, step: 1 }) :
      undefined;

    return (
      <HeroWindow
        hero={hero}
        visible={true}
        visibleArtifactDescription={visibleArtifactDescription}
        onVisibleArtifactDescriptionChange={action("Visible Artifact Description Index Change")}
      />
    );
  })
  .add("dismissal", () => (
    <HeroWindow
      hero={heroBase}
      visible={true}
      dismissible={boolean("Dismissible", true)}
      dismissHeroPromptVisible={boolean("Dismiss Hero Prompt Visible", false)}
      onDismissHeroClick={action("Dismiss Hero Click")}
      onCancelDismissHeroClick={action("Cancel Dismiss Hero Click")}
      onConfirmDismissHeroClick={action("Confirm Dismiss Hero Click")}
    />
  ))
  .add("status text", () => (
    <HeroWindow
      hero={heroBase}
      visible={true}
      statusText={text("Status Text", "Status Text")}
      onStatusTextChange={action("Status Text Change")}
    />
  ));
