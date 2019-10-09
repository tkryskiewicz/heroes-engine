import { storiesOf } from "@storybook/react";
import React from "react";

import { Placeholder } from "../Placeholder";
import { AdventureScreen } from "./AdventureScreen";

const renderAdventureWindow = () => <Placeholder name="Adventure Window" />;
const renderWorldMap = () => <Placeholder name="World Map" />;
const renderAdventureButtons = () => <Placeholder name="Adventure Buttons" />;
const renderHeroLocators = () => <Placeholder name="Hero Locators" />;
const renderTownLocators = () => <Placeholder name="Town Locators" />;
const renderStatusWindow = () => <Placeholder name="Status Window" />;

storiesOf("AdventureScreen", module)
  .add("default", () => (
    <AdventureScreen
      renderAdventureWindow={renderAdventureWindow}
      renderWorldMap={renderWorldMap}
      renderAdventureButtons={renderAdventureButtons}
      renderHeroLocators={renderHeroLocators}
      renderTownLocators={renderTownLocators}
      renderStatusWindow={renderStatusWindow}
    />
  ));
