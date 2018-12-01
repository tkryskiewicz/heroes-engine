import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { buttonImages } from "./assets";

import { GameButton, GameButtonGroup, GameButtonType } from "./GameButton";

const groupOptions = Object.keys(buttonImages).reduce<{ [group: string]: string }>((p, c) => {
  p[c] = c;

  return p;
}, {});

storiesOf(GameButton.name, module)
  .add("default", () => {
    const group: GameButtonGroup = select("Group", groupOptions, "system");

    const typeOptions = Object.keys(buttonImages[group]).reduce<{ [type: string]: GameButtonType }>((p, c) => {
      p[c] = c as any; // FIXME: ???

      return p;
    }, {});

    const type: GameButtonType = select("Type", typeOptions, typeOptions[Object.keys(typeOptions)[0]]);

    return (
      <GameButton
        group={group}
        type={type}
        disabled={boolean("Disabled", false)}
        onClick={action("Click")}
      />
    );
  });
