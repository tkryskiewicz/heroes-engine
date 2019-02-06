import { storiesOf } from "@storybook/react";
import * as React from "react";

import { AdventureScreen } from "./AdventureScreen";

const renderAdventureWindow = () => <span>Adventure Window</span>;
const renderWorldMap = () => <span>World Map</span>;
const renderAdventureButtons = () => <span>Adventure Buttons</span>;
const renderHeroLocators = () => <span>Hero Locators</span>;
const renderTownLocators = () => <span>Town Locators</span>;
const renderStatusWindow = () => <span>Status Window</span>;

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
