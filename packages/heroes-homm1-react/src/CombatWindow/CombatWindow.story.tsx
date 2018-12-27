import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Alignment, HeroClass } from "heroes-homm1";

import { CombatWindow, CombatWindowProps } from "./CombatWindow";

storiesOf(CombatWindow.name, module)
  .add("default", () => {
    const attacker: CombatWindowProps["attacker"] = {
      alignment: Alignment.Red,
      heroClass: HeroClass.Knight,
    };

    return (
      <CombatWindow
        visible={boolean("Visible", true)}
        attacker={attacker}
      />
    );
  });
