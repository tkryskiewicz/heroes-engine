import { defineMessages } from "react-intl";

import { StructureStatus } from "heroes-homm1";

export const messages = defineMessages({
  cannotRecruitHero: {
    defaultMessage: "Cannot recruit - you already have a Hero in this town.",
    id: "ui.castleOptionsWindow.cannotRecruitHero",
  },
  defaultStatusText: {
    defaultMessage: "Castle Options",
    id: "ui.castleOptionsWindow.defaultStatusText",
  },
  exitStatusText: {
    defaultMessage: "Exit Castle",
    id: "ui.castleOptionsWindow.exitStatusText",
  },
  recruitHeroStatusText: {
    defaultMessage: "Recruit a new Hero",
    id: "ui.castleOptionsWindow.recruitHeroStatusText",
  },
  structureAvailableStatusText: {
    defaultMessage: "Build {structureName}",
    id: "ui.castleOptionsWindow.structureAvailableStatusText",
  },
  structureBuiltStatusText: {
    defaultMessage: "{structureName} is already built",
    id: "ui.castleOptionsWindow.structureBuiltStatusText",
  },
  structureUnaffordableStatusText: {
    defaultMessage: "Cannot afford {structureName}",
    id: "ui.castleOptionsWindow.structureUnaffordableStatusText",
  },
  structureUnavailableStatusText: {
    defaultMessage: "Cannot build {structureName}",
    id: "ui.castleOptionsWindow.structureUnavailableStatusText",
  },
});

export const getStructureStatusMessage = (status: StructureStatus) => {
  switch (status) {
    case StructureStatus.Built:
      return messages.structureBuiltStatusText;
    case StructureStatus.Available:
      return messages.structureAvailableStatusText;
    case StructureStatus.NotEnoughResources:
      return messages.structureUnaffordableStatusText;
    case StructureStatus.Unavailable:
      return messages.structureUnavailableStatusText;
  }
};
