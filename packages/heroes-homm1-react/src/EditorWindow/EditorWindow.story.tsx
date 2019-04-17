import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Placeholder } from "../Placeholder";
import { EditorWindow } from "./EditorWindow";

const renderAdventureWindow = () => <Placeholder name="Adventure Window" />;
const renderWorldMap = () => <Placeholder name="World Map" />;
const renderOptions = () => <Placeholder name="Options" />;
const renderOptionDetails = () => <Placeholder name="Option Details" />;
const renderButtons = () => <Placeholder name="Buttons" />;

storiesOf("EditorWindow", module)
  .add("default", () => (
    <EditorWindow
      renderAdventureWindow={renderAdventureWindow}
      renderWorldMap={renderWorldMap}
      renderOptions={renderOptions}
      renderOptionDetails={renderOptionDetails}
      renderButtons={renderButtons}
    />
  ));
