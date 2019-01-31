import * as React from "react";
import { FormattedMessage } from "react-intl";

import { enoughResources, Resources, Structure, Town } from "heroes-core";
import { MageGuild, Shipyard, spells as allSpells, StructureId } from "heroes-homm1";

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
  town: Town,
  resources: Resources,
  onClose: () => void,
): React.ReactNode | undefined => {
  switch (structure.id) {
    case StructureId.Castle:
      if (!structure.isBuilt) {
        return (
          <BuildStructureWindow
            visible={true}
            town={town.id}
            structure={structure.id}
            cost={structure.cost}
            canBuild={enoughResources(resources, structure.cost)}
            onCancelClick={onClose}
          />
        );
      }

      return (
        <CastleOptionsWindow
          visible={true}
          town={town.id}
          canConstructStructures={town.canConstructStructures}
          resources={resources}
          options={town.structures.filter((s) => s.id !== StructureId.Castle)}
          onExitClick={onClose}
        />
      );
    case StructureId.MageGuild:
      const mageGuild = structure as MageGuild;

      return (
        <MageGuildWindow
          visible={true}
          spells={allSpells.filter((s) => mageGuild.data.spells.indexOf(s.id) !== -1)}
          levelBuilt={1}
          onExitClick={onClose}
        />
      );
    case StructureId.ThievesGuild:
      return (
        <ThievesGuildWindow
          visible={true}
          onExitClick={onClose}
        />
      );
    case StructureId.Tavern:
      return (
        <TavernWindow
          visible={true}
          onOkayClick={onClose}
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
            onConfirmClick={onClose}
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
          onCancelClick={onClose}
        />
      );
    case StructureId.Well:
      return (
        <TownPopulationWindow
          visible={true}
          town={town.id}
          onExitClick={onClose}
        />
      );
  }
};
