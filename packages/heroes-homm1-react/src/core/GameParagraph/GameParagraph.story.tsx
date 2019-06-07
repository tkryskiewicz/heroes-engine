import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { GameParagraph, GameParagraphProps } from "./GameParagraph";

const textSizeOptions: { readonly [s: string]: GameParagraphProps["textSize"] } = {
  Large: "large",
  Normal: "normal",
  Small: "small",
  Tiny: "tiny",
};

storiesOf("core|GameParagraph", module)
  .add("default", () => (
    <GameParagraph textSize={select("Text Size", textSizeOptions, "large")}>
      {text("Content", "Content")}
    </GameParagraph>
  ));
