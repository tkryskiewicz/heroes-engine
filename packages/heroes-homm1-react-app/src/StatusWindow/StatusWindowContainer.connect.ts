import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getDate, getObject, isObjectOwnedBy, isOwnableMapObject, isStructureBuilt } from "heroes-core";
import { isHeroMapObject, isTownMapObject, StructureId } from "heroes-homm1";
import { AppState, statusWindowActions } from "heroes-homm1-state";

import { StatusWindow, StatusWindowProps } from "./StatusWindowContainer";

type StateProp =
  "dateInformation" |
  "resourceSummary" |
  "heroStatus" |
  "selectedOption";

const mapStateToProps = (state: AppState): Pick<StatusWindowProps, StateProp> => {
  const ownedTowns = state.game.map.tiles
    .map((t) => t.object)
    .filter(isOwnableMapObject)
    .filter((o) => isObjectOwnedBy(o, state.game.alignment))
    .filter(isTownMapObject);

  const activeObject = state.locators.activeObjectId ?
    getObject(state.game.map, state.locators.activeObjectId) :
    undefined;

  return {
    dateInformation: getDate(state.game.turn),
    heroStatus: isHeroMapObject(activeObject) ?
      {
        // FIXME
        alignment: activeObject.owner || state.game.alignment,
        army: activeObject.army,
        hero: activeObject.heroId,
        heroClass: activeObject.heroClass,
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
