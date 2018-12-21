import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { buttonImages } from "./assets";

import { GameButton } from "./GameButton";

const groupOptions = Object.keys(buttonImages).reduce<{ [group: string]: string }>((p, c) => {
  p[c] = c;

  return p;
}, {});

storiesOf(`base/${GameButton.name}`, module)
  .add("default", () => {
    const group = select("Group", groupOptions, "system");

    const typeOptions = Object.keys(buttonImages[group]).reduce<{ [type: string]: string }>((p, c) => {
      p[c] = c;

      return p;
    }, {});

    const type = select("Type", typeOptions, typeOptions[Object.keys(typeOptions)[0]]);

    return (
      <GameButton
        group={group}
        type={type as any}
        disabled={boolean("Disabled", false)}
        onMouseEnter={action("Mouse Enter")}
        onMouseLeave={action("Mouse Leave")}
        onClick={action("Click")}
      />
    );
  });
