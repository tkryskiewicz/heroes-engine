import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EditorOption } from "heroes-homm1";

import { SelectOptions } from "../../stories";
import { EditorOptions } from "./EditorOptions";

const optionOptions = Object.keys(EditorOption).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: EditorOption[c],
  };
}, {});

storiesOf("editor/EditorOptions", module)
  .add("default", () => (
    <EditorOptions
      selectedOption={select("Selected Option", optionOptions, EditorOption.Terrains)}
      onSelectedOptionChange={action("Selected Option Change")}
    />
  ));
