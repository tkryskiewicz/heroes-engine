import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Placeholder } from "../../Placeholder";
import { EditorObject } from "./EditorObject";

const renderObject = () => <Placeholder name="Object" />;

storiesOf("editor/EditorObject", module)
  .add("default", () => {
    const width = number("Width", 2, { range: true, min: 1, max: 10, step: 1 });
    const height = number("Height", 2, { range: true, min: 1, max: 10, step: 1 });

    return (
      <EditorObject
        width={width}
        height={height}
        obstacleGrid={new Array(width * height).fill(true)}
        renderObject={renderObject}
      />
    );
  })
  .add("irregular obstacle", () => (
    <EditorObject
      width={3}
      height={2}
      obstacleGrid={[undefined, true, true, false, false, undefined]}
      renderObject={renderObject}
    />
  ));
