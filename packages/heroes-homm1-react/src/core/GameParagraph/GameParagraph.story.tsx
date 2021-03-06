import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { GameParagraph, GameParagraphProps } from "./GameParagraph";

const textSizeOptions: GameParagraphProps["textSize"][] = [
  "large",
  "normal",
  "small",
  "tiny",
];

storiesOf("core|GameParagraph", module)
  .add("default", () => (
    <GameParagraph textSize={select("Text Size", textSizeOptions, "large")}>
      {text("Content", "Content")}
    </GameParagraph>
  ));
