import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getDate, getObjectById, isObjectOwnedBy, isOwnableObject, isStructureBuilt } from "heroes-core";
import { isDefined } from "heroes-helpers";
import { isHeroObject, isTownObject, StructureId } from "heroes-homm1";
import { AppState, statusWindowActions } from "heroes-homm1-state";

import { StatusWindow, StatusWindowProps } from "./StatusWindowContainer";

type StateProp =
  "dateInformation" |
  "resourceSummary" |
  "heroStatus" |
  "selectedOption";

const mapStateToProps = (state: AppState): Pick<StatusWindowProps, StateProp> => {
  const ownedTowns = state.game.map.cells
    .map((c) => c.object)
    .filter(isDefined)
    .filter(isOwnableObject)
    .filter((o) => isObjectOwnedBy(o, state.game.activePlayer))
    .filter(isTownObject);

  const activeObject = state.locators.activeObjectId ?
    getObjectById(state.game.map, state.locators.activeObjectId) :
    undefined;

  return {
    dateInformation: getDate(state.game.turn),
    heroStatus: activeObject && isHeroObject(activeObject) ?
      {
        army: activeObject.army,
        hero: activeObject.heroId,
        heroClass: activeObject.heroClass,
        // FIXME
        playerColor: activeObject.owner || state.game.activePlayer,
      } :
      undefined,
    resourceSummary: {
      castleCount: ownedTowns.filter((t) => isStructureBuilt(t, StructureId.Castle)).length,
      resources: state.game.resources,
      townCount: ownedTowns.filter((t) => !isStructureBuilt(t, StructureId.Castle)).length,
    },
    selectedOption: state.statusWindow.selectedOption,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<StatusWindowProps, "onSelectedOptionChange"> => ({
  onSelectedOptionChange(value) {
    dispatch(statusWindowActions.changeSelectedOption(value));
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(StatusWindow);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as StatusWindow,
  ContainerConnectedProps as StatusWindowProps,
};
