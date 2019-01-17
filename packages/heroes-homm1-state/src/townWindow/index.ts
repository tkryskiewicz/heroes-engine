export {
  TownWindowActionType,
  TownWindowAction,
  openTownWindow,
  closeTownWindow,
  openStructureDetails,
  closeStructureDetails,
  openOptionDetails as openCastleOptionDetails,
  closeOptionDetails as closeCastleOptionDetails,
  changeRecruitTroopCount,
  selectTownWindowGarrisonTroop,
  selectTownWindowHeroTroop,
} from "./actions";
export { townWindowReducer } from "./reducers";
export { TownWindowState } from "./state";
