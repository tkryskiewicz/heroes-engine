import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { EditorObjectGrid } from "./EditorObjectGrid";

storiesOf("editor|EditorObjectGrid", module)
  .add("default", () => {
    const width = number("Width", 2, { range: true, min: 1, max: 10, step: 1 });
    const height = number("Height", 2, { range: true, min: 1, max: 10, step: 1 });

    return (
      <EditorObjectGrid
        width={width}
        height={height}
        grid={new Array(width * height).fill(true)}
      />
    );
  })
  .add("irregular obstacle", () => (
    <EditorObjectGrid
      width={3}
      height={2}
      grid={[undefined, true, true, false, false, undefined]}
    />
  ));
