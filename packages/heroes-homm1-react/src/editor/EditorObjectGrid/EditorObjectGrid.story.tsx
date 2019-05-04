import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Placeholder } from "../../Placeholder";
import { EditorObjectGrid } from "./EditorObjectGrid";

const renderObject = () => <Placeholder name="Object" />;

storiesOf("editor/EditorObjectGrid", module)
  .add("default", () => {
    const width = number("Width", 2, { range: true, min: 1, max: 10, step: 1 });
    const height = number("Height", 2, { range: true, min: 1, max: 10, step: 1 });

    return (
      <EditorObjectGrid
        width={width}
        height={height}
        grid={new Array(width * height).fill(true)}
        renderObject={renderObject}
      />
    );
  })
  .add("irregular obstacle", () => (
    <EditorObjectGrid
      width={3}
      height={2}
      grid={[undefined, true, true, false, false, undefined]}
      renderObject={renderObject}
    />
  ));
