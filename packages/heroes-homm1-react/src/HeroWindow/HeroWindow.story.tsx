import { action } from "@storybook/addon-actions";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Hero } from "heroes-core";
import { Alignment, ArmySize, CreatureId, HeroClass, HeroId } from "heroes-homm1";

import { alignmentOptions, heroClassOptions, heroOptions, skillOptions } from "../stories";
import { HeroWindow } from "./HeroWindow";
import { MiscInfoType } from "./MiscInfo";

// TODO: move or remove???
export const miscInfoOptions: { [s: string]: MiscInfoType | "" } = {
  Experience: MiscInfoType.Experience,
  Luck: MiscInfoType.Luck,
  Morale: MiscInfoType.Morale,
  None: "",
};

storiesOf("HeroWindow", module)
  .add("default", () => {
    const hero: Hero = {
      alignment: select("Alignment", alignmentOptions, Alignment.Red),
      army: [
        {
          count: 1,
          creature: CreatureId.Peasant,
        },
      ],
      experience: number("Experience", 0, { range: true, min: 0, max: 999999, step: 1 }),
      heroClass: select("Hero Class", heroClassOptions, HeroClass.Knight),
      id: select("Hero", heroOptions, HeroId.LordKilburn),
      luck: number("Luck", 0, { range: true, min: -3, max: 3, step: 1 }),
      mobility: 0,
      morale: number("Morale", 0, { range: true, min: -3, max: 3, step: 1 }),
      skills: {},
    };

    return (
      <HeroWindow
        hero={hero}
        visible={boolean("Visible", true)}
        visibleSkillDetails={select("Visible Skill Details", { None: "", ...skillOptions }, "")}
        onVisibleSkillDetailsChange={action("Visible Skill Details Change")}
        visibleMiscInfoDetails={select("Visible Misc Info Details", { None: "", ...miscInfoOptions }, "")}
        onVisibleMiscInfoDetailsChange={action("Visible Misc Info Details Change")}
        onCrestClick={action("Crest Click")}
        selectedTroopIndex={number("Selected Troop Index", 0, { range: true, min: 0, max: ArmySize - 1, step: 1 })}
        onSelectTroop={action("Select Troop")}
        onSelectedTroopClick={action("Selected Troop Click")}
        onSwapTroops={action("Swap Troops")}
        troopDetailsVisible={boolean("Troop Details Visible", false)}
        onDismissTroopClick={action("Dismiss Troop Click")}
        dismissTroopPromptVisible={boolean("Dismiss Troop Prompt Visible", false)}
        onCancelDismissTroopClick={action("Cancel Dismiss Troop Click")}
        onConfirmDismissTroopClick={action("Confirm Dismiss Troop Click")}
        onExitTroopDetails={action("Exit Troop Details")}
        dismissHeroPromptVisible={boolean("Dismiss Hero Prompt Visible", false)}
        onDismissHeroClick={action("Dismiss Hero Click")}
        onCancelDismissHeroClick={action("Cancel Dismiss Hero Click")}
        onConfirmDismissHeroClick={action("Confirm Dismiss Hero Click")}
        statusText={text("Status Text", "Status Text")}
        onStatusTextChange={action("Status Text Change")}
        onExitClick={action("Exit Click")}
      />
    );
  });
