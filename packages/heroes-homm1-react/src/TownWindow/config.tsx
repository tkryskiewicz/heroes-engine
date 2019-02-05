import * as React from "react";
import { FormattedMessage } from "react-intl";

import { enoughResources, Resources, Structure } from "heroes-core";
import { MageGuild, Shipyard, StructureId } from "heroes-homm1";

import { GameModal } from "../base";
import { BuildShipWindow } from "../BuildShipWindow";
import { BuildStructureWindow } from "../BuildStructureWindow";
import { GameText } from "../core";
import { MageGuildWindow } from "../MageGuildWindow";
import { TavernWindow } from "../TavernWindow";
import { ThievesGuildWindow } from "../ThievesGuildWindow";
import { TownPopulationWindow } from "../TownPopulationWindow";
import { CastleOptionsWindow } from "./CastleOptionsWindow";
import { messages } from "./messages";

export const getStructureDetails = (
  structure: Structure,
  town: string,
  resources: Resources,
  props: {
    readonly onCloseClick: () => void;
  },
): React.ReactNode | undefined => {
  switch (structure.id) {
    case StructureId.Castle:
      if (!structure.isBuilt) {
        return (
          <BuildStructureWindow
            visible={true}
            town={town}
            structure={structure.id}
            cost={structure.cost}
            canBuild={enoughResources(resources, structure.cost)}
            onCancelClick={props.onCloseClick}
          />
        );
      }

      return (
        <CastleOptionsWindow
          visible={true}
          town={town}
          onExitClick={props.onCloseClick}
        />
      );
    case StructureId.MageGuild:
      const mageGuild = structure as MageGuild;

      return (
        <MageGuildWindow
          visible={true}
          spells={mageGuild.data.spells}
          levelBuilt={1}
          onExitClick={props.onCloseClick}
        />
      );
    case StructureId.ThievesGuild:
      return (
        <ThievesGuildWindow
          visible={true}
          onExitClick={props.onCloseClick}
        />
      );
    case StructureId.Tavern:
      return (
        <TavernWindow
          visible={true}
          onOkayClick={props.onCloseClick}
        />
      );
    case StructureId.Shipyard:
      const shipyard = structure as Shipyard;

      // TODO: implement
      const shipAlreadyBuilt = false;

      if (shipAlreadyBuilt) {
        return (
          <GameModal
            visible={true}
            type="okay"
            onConfirmClick={props.onCloseClick}
          >
            <GameText size="large">
              <FormattedMessage {...messages.cannotBuildShip} />
            </GameText>
          </GameModal>
        );
      }

      const canBuild = enoughResources(resources, shipyard.data.shipCost);

      // TODO: implement
      const onConfirm = () => undefined;

      return (
        <BuildShipWindow
          visible={true}
          cost={shipyard.data.shipCost}
          canBuild={canBuild}
          onOkayClick={onConfirm}
          onCancelClick={props.onCloseClick}
        />
      );
    case StructureId.Well:
      return (
        <TownPopulationWindow
          visible={true}
          town={town}
          onExitClick={props.onCloseClick}
        />
      );
  }
};
