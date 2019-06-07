import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { editorOption } from "../../stories";
import { EditorOptions } from "./EditorOptions";

storiesOf("editor|EditorOptions", module)
  .add("default", () => (
    <EditorOptions
      selectedOption={editorOption("Selected Option")}
      onSelectedOptionChange={action("Selected Option Change")}
    />
  ));
